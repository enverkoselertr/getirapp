import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { tagFilter, tagDelete } from '../../../redux'
import { JSON_API } from '../../../helper/constans'
class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sttTags: []
        }
    }
    componentDidMount = async () => {
        this.searchTags();
    }
    searchTags = async (event) => {
        let url = event == undefined ? '' : '?name_like=' + event.target.value.toLowerCase()
        var ttags = "";
        await axios.get(`${JSON_API}/items/items` + url).then((response) => {
            response.data.forEach(element => {
                ttags += element.tags + ',';
            });
            this.setState({
                sttTags: ttags
            });
        })
            .catch((e) => {
                console.error(e)
            })
    }
    renderTags = (data) => {
        var result = data.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null));
        var countsExtended = Object.keys(result).map(k => {
            return { name: k, count: result[k] };
        });
        return countsExtended;
    }
    render() {
        const { sttTags } = this.state;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Tags</h5>
                    <div className="form-group">
                        <input type="search" className="form-control" placeholder="Search Brand" id="searchBrand" onChange={this.searchTags} />
                        <div className="setting-scroll ps-1">
                        {
                            this.renderTags(sttTags.toString().split(',')).map((element) => {
                                return (
                                    <div class="form-check text-start">
                                        <input class="form-check-input" type="checkbox" value={element.name} id={element.name} onChange={e => e.target.checked ? this.props.tagFilter(e.target.value) : this.props.tagDelete(e.target.value)} />
                                        <label class="form-check-label" for={element.name}>
                                            {element.name} <span className="help-text">({element.count})</span>
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
        tagValue: state.sort.tagValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tagFilter: tagVal => dispatch(tagFilter(tagVal)),
        tagDelete: tagVal => dispatch(tagDelete(tagVal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);

