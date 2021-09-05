import { TAG_FILTER, TAG_DELETE } from './TagTypes'

const initialState = {
  tagValue: [],
}


const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_FILTER: return {
       ...state,
       tagValue: [...state.tagValue, action.payload]
    }
    case TAG_DELETE: return {
        ...state,
        tagValue: state.tagValue.filter(item => item !== action.payload),
    }

    default: return state
  }
}

export default tagReducer