import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sortUpdate } from '../../../redux'

function sorting(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Sorting</h5>
                
                <div className="radioGroup text-start">
                    <div className="form-check">
                        <input type="radio" id="rbPlh" name="sorting" className="form-check-input" onChange={() => props.sortUpdate('_sort=price&_order=asc')} />
                        <label className="form-check-label" for="rbPlh">Price low to high</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" id="rbPhl" name="sorting" className="form-check-input" onChange={() => props.sortUpdate('_sort=price&_order=desc')} />
                        <label className="form-check-label" for="rbPhl">Price high to low</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" id="rbNo" name="sorting" className="form-check-input" onChange={() => props.sortUpdate('_sort=added&_order=asc')} />
                        <label className="form-check-label" for="rbNo">New to old</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" id="rbOn" name="sorting" className="form-check-input" onChange={() => props.sortUpdate('_sort=added&_order=desc')} />
                        <label className="form-check-label" for="rbOn">Old to new</label>
                    </div>
                </div>
            </div>
        </div> 
    )
}

const mapStateToProps = state => {
    return {
        sortType: state.sort.sortType
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sortUpdate: sortVal => dispatch(sortUpdate(sortVal))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(sorting);
