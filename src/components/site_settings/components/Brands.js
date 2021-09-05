import React, { Component } from 'react'
import { connect } from 'react-redux';
import { brandFilter, brandDelete } from '../../../redux'
import { JSON_API } from '../../../helper/constans'
class Brands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: []
        }
    }
    componentDidMount = async () => {
        this.searchBrand();
    }
    searchBrand = async (event) => {
       let url = event == undefined ? '' : '?name_like=' + event.target.value.toLowerCase()
        await fetch(`${JSON_API}/companies` + url)
            .then(res => res.json())
            .then(
                (result) => { 
                    this.setState({
                        brands: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }
    
    render() {
        const { brands } = this.state;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Brands</h5>
                    <div className="form-group">
                        <input type="search" className="form-control" placeholder="Search Brand" id="searchBrand" onChange={this.searchBrand} />
                        <div className="setting-scroll ps-1">
                        {
                            brands.map((element) => {
                                return (
                                    <div class="form-check text-start">
                                        <input class="form-check-input" type="checkbox" value={element.slug} id={element.slug} onChange={e => e.target.checked ? this.props.brandFilter(e.target.value) : this.props.brandDelete(e.target.value)} />
                                        <label class="form-check-label" for={element.slug}>
                                            {element.name}
                                        </label>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        brandValue: state.sort.brandValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        brandFilter: brandVal => dispatch(brandFilter(brandVal)),
        brandDelete: brandVal => dispatch(brandDelete(brandVal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);