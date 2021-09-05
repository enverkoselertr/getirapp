import React, { Component } from 'react'
import { connect } from 'react-redux'
import { itmTypeFilter } from '../../../redux'
class ItemType extends Component {
    render() {
        return (
            <div className="row mb-2">
                <div className="col-md-2 col-6">
                    <input type="radio" className="btn-check" name="options-outlined" id="typeMug" autocomplete="off" defaultChecked onChange={() => this.props.itmTypeFilter('mug')} />
                    <label className="btn btn-outline-info w-100" for="typeMug">Mug</label>
                </div>
                <div className="col-md-2 col-6">
                    <input type="radio" className="btn-check" name="options-outlined" id="typeShirt" autocomplete="off"  onChange={() => this.props.itmTypeFilter('shirt')} />
                    <label className="btn btn-outline-info w-100" for="typeShirt">Shirt</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        typeValue: state.itmType.typeValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        itmTypeFilter: typeValue => dispatch(itmTypeFilter(typeValue))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemType);
