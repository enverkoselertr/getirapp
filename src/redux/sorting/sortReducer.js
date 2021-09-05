import { SORT_UPDATE } from './sortTypes'

const initialState = {
  sortType: ''
}

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_UPDATE: return {
      ...state,
      sortType: action.payload
    }

    default: return state
  }
}

export default sortReducer