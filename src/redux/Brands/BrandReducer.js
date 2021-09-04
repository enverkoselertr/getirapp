import { BRAND_FILTER, BRAND_DELETE } from './BrandTypes'

const initialState = {
  brandValue: [],
  arr: []
}


const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case BRAND_FILTER: return {
       ...state,
       brandValue: [...state.brandValue, action.payload]
    //   brandValue: action.payload
    }
    case BRAND_DELETE: return {
        ...state,
        brandValue: state.brandValue.filter(item => item !== action.payload),
    }

    default: return state
  }
}

export default brandReducer