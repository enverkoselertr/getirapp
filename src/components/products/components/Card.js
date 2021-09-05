import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBasket, removeBasket } from '../../../redux'
class Card extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
    };
    render() {
        const { data } = this.props;
        return (
            data.map((event) => {
                return (
                    <div className="col-md-4 col-6">
                        <div className="card products-card">
                            <img className="card-img-top" src={event.itemType == 'mug' ? 'https://cdn.dsmcdn.com/mnresize/1200/1800/ty156/product/media/images/20210810/13/117311294/74443515/1/1_org_zoom.jpg': 'https://cdn.dsmcdn.com/mnresize/1200/1800/ty163/product/media/images/20210825/13/122404941/127905209/1/1_org_zoom.jpg'} alt="Card image cap" />
                            <div className="card-body">
                                <span className="product-name">{event.name}</span>
                                <span className="product-price">₺{event.price}</span>
                                <button className="btn btn-outline-info w-100" onClick={()=> this.props.addBasket(event.added)}>Add</button>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}

const mapStateToProps = state => {
    return {
        basketData: state.basket.basketData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBasket: basketData => dispatch(addBasket(basketData)),
        removeBasket: basketData => dispatch(removeBasket(basketData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
