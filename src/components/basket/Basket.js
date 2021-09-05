import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addQty, removeQty, removeBasket } from '../../redux'
const Basket = (props) => {
    const totalPrice = props.basketData.reduce((total, item) => (total += item.price * item.qty), 0);

    return (
        <div class="card" >
            <div className="card-body">
                {console.log(props.basketData)}
                <ul class="list-group list-group-flush cart-list">
                    {
                        props.basketData.map((event) => {
                            return (
                                <li class="list-group-item">
                                    <div className="basket-products-info">
                                        <span className='cart-product-name'>{event.name}</span>
                                        <span className="cart-product-price">{event.price}</span>
                                        <span className="qty"></span>
                                    </div>
                                    <div className="basket-products-action">
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-info" onClick={() => event.qty == 0 ? props.removeBasket(event.added) : props.removeQty(event.added, event.qty)}>-</button>
                                            <span type="button" class="btn btn-light">{event.qty}</span>
                                            <button type="button" class="btn btn-info" onClick={() => props.addQty(event.added, event.qty)}>+</button>
                                        </div>
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
                <div className="basket-total">
                    ₺{totalPrice.toFixed(2)}
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

const mapDispatchToProps = dispatch => {
    return {
        addQty: (qtyadded, qtyVal) => dispatch(addQty(qtyadded, qtyVal)),
        removeQty: (qtyadded, qtyVal) => dispatch(removeQty(qtyadded, qtyVal)),
        removeBasket: (qtyadded) => dispatch(removeBasket(qtyadded)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);