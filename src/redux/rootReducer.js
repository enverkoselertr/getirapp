import { combineReducers } from 'redux'
import sortReducer from './sorting/sortReducer'
import brandReducer from './Brands/BrandReducer'
import tagReducer from './Tags/TagReducer'
import itmTypeReducer from './ItemType/ItemTypeReducer'
import basketReducer from './Basket/BasketReducer'


const rootReducer = combineReducers({
  sort: sortReducer,
  brand: brandReducer,
  tag: tagReducer,
  itmType: itmTypeReducer,
  basket: basketReducer,
})

export default rootReducer