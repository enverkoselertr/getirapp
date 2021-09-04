import React, { Component } from 'react'
import { connect } from 'react-redux';

const Header = props => {
    const totalPrice = props.basketData.reduce((total, item) => (total += item.price * item.qty), 0);
    return (
        <div cl>
            <nav className="navbar navbar-light bg-info">
                <div className="container">
                    <a className="navbar-brand mx-auto">MARKET</a>
                    <div className="d-flex">
                        <button className="btn btn-shopping-cart" type="submit"><i className="bi bi-bag"></i> ₺{totalPrice.toFixed(2)}</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        basketData: state.basket.basketData
    }
}
export default connect(mapStateToProps)(Header);