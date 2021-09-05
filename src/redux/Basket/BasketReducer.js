import { ADD_BASKET, REMOVE_BASKET, ADD_QTY, REMOVE_QTY } from './BasketTypes'
import { JSON_API } from '../../helper/constans'
import axios from 'axios'

const initialState = {
    products: [],
    basketData: [],
}

const itemsData = async (state = initialState) => {
    await axios
        .get(`${JSON_API}/items`)
        .then(res => {
            state.products = res.data
        });
}



const basketReducer = (state = initialState, action) => {
    itemsData()
    switch (action.type) {
        case ADD_BASKET:
            const item = state.products.find(
                (product) => product.added === action.payload.id
            );
            const inCart = state.basketData.find((item) =>
                item.added === action.payload.id ? true : false
            );
            return {
                ...state,
                basketData: inCart
                    ? state.basketData.map((item) =>
                        item.added === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.basketData, { ...item, qty: 1 }],
            };
        case REMOVE_BASKET: return {
            ...state,
            basketData: state.basketData.filter((item) => item.added !== action.payload.id),
        }
        case ADD_QTY:
            return {
                ...state,
                basketData: state.basketData.map((item) =>
                    item.added === action.payload.id ? { ...item, qty: + action.payload.qty + 1 } : item
                ),
            };

        case REMOVE_QTY:
            return {
                ...state,
                basketData: state.basketData.map((item) =>
                    item.added === action.payload.id ? { ...item, qty: + action.payload.qty - 1 } : item
                ),
            };

        default: return state
    }
}

export default basketReducer