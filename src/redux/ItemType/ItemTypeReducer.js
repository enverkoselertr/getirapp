import { ITMTYPE_FILTER } from './ItemTypeTypes'

const initialState = {
  typeValue: ''
}


const itmTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITMTYPE_FILTER: return {
       ...state,
       typeValue: action.payload
    }
    default: return state
  }
}

export default itmTypeReducer