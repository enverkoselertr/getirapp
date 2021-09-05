import { ADD_BASKET, REMOVE_BASKET, ADD_QTY, REMOVE_QTY } from './BasketTypes'

export const addBasket = (itemID = '') => {
    return {
        type: ADD_BASKET,
        payload: {
            id: itemID
        }
    }
}
export const removeBasket = (itemID = '') => {
    return {
        type: REMOVE_BASKET,
        payload: {
            id: itemID
        }
    }
}


export const addQty = (itemID, value) => {
    return {
        type: ADD_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const removeQty = (itemID, value) => {
    return {
        type: REMOVE_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

