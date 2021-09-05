import React, { useState } from 'react'
import { connect } from 'react-redux';
import Basket from './basket/Basket';
import Settings from './site_settings/Settings';
const Header = props => {
    const [modalOpen, setmodalOpen] = useState("");
    const totalPrice = props.basketData.reduce((total, item) => (total += item.price * item.qty), 0);
    return (
        <div>
            <nav className="navbar navbar-light bg-info fixed-top">
                <div className="container">
                    <div className="d-flex d-block d-sm-none">
                        <button className="btn btn-shopping-cart" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setmodalOpen("filter")}><i className="bi bi-filter"></i> Filter</button>
                    </div>
                    <a className="navbar-brand mx-auto">MARKET</a>
                    <div className="d-flex">
                        <button className="btn btn-shopping-cart" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setmodalOpen("basket")}><i className="bi bi-bag"></i> ₺{totalPrice.toFixed(2)}</button>
                    </div>
                </div>
            </nav>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen-sm-down">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{modalOpen == "filter" ? "Filter" : "Shopping Cart"}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {modalOpen == "filter" ? <Settings /> : <Basket />}

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