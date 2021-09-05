import './Products.css'
import React, { Component } from 'react'
import Card from './components/Card'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { JSON_API } from '../../helper/constans'
import { connect } from 'react-redux';

import ItemType from '../site_settings/components/ItemType';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sttProducts: [],
            currentPage: 1
        }
    }
    componentDidMount() {
        this.getProducts(1, this.props.sortType);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.sortType !== this.props.sortType || prevProps.brandValue !== this.props.brandValue || prevProps.tagValue !== this.props.tagValue || prevProps.typeValue !== this.props.typeValue) {
            this.getProducts(1, this.props.sortType, this.brandFilter(), this.tagsFilter(), this.itmTypeFilter());
        }
    }
    brandFilter = () => {
        var brandFilter = "";
        this.props.brandValue.forEach(element => {
            brandFilter += "&manufacturer=" + element;
        })
        return brandFilter;
    }
    tagsFilter = () => {
        var tagFilter = "";
        this.props.tagValue.forEach(element => {
            tagFilter += "&tags_like=" + element;
        })
        return tagFilter;
    }
    itmTypeFilter = () => {
        if (this.props.typeValue != '') {
            return '&itemType=' + this.props.typeValue;
        }

    }
    getProducts = async (currentPage, sort, filterBrand, filterTag, filterItmType) => {
        await axios
            .get(`${JSON_API}/items?` + sort + filterBrand + filterTag + filterItmType, {
                params: {
                    _page: currentPage,
                    _limit: 15
                }
            })
            .then(res => {
                this.setState({
                    sttProducts: res.data,
                    countPage: Math.round(res.headers["x-total-count"] / 15)
                });
            });

    }
    handlePageChange = (selectedObject) => {
        this.getProducts(selectedObject.selected);
    };
    renderCard = (items) => {
        return <Card data={items} />
    }
    render() {
        const { sttProducts, countPage } = this.state;
        return (
            <div>
                <h5>Products</h5>
                <ItemType />
                <div className="row">
                    {this.renderCard(sttProducts)}
                    <div className="col-md-12">
                        <nav className="product-pagination">
                        <ReactPaginate
                            pageCount={countPage}
                            pageRange={2}
                            marginPagesDisplayed={4}
                            onPageChange={this.handlePageChange}
                            containerClassName={'pagination'}
                            previousLinkClassName={'page-link'}
                            breakClassName={'page-link'}
                            nextLinkClassName={'page-link'}
                            pageClassName={'page-item'}
                            disabledClassNae={'disabled'}
                            pageLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </nav>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        sortType: state.sort.sortType,
        brandValue: state.brand.brandValue,
        tagValue: state.tag.tagValue,
        typeValue: state.itmType.typeValue,
    }
}

export default connect(mapStateToProps)(Products);
