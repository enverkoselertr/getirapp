import React, { Component } from 'react'
import { connect } from 'react-redux';
import Basket from './basket/Basket';

const Header = props => {
    const totalPrice = props.basketData.reduce((total, item) => (total += item.price * item.qty), 0);
    return (
        <div>
            <nav className="navbar navbar-light bg-info fixed-top">
                <div className="container">
                    <a className="navbar-brand mx-auto">MARKET</a>
                    <div className="d-flex">
                        <button className="btn btn-shopping-cart" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-bag"></i> ₺{totalPrice.toFixed(2)}</button>
                    </div>
                </div>
            </nav>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen-sm-down">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Basket />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        basketData: state.basket.basketData
    }
}
export default connect(mapStateToProps)(Header);