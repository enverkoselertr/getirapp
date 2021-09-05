import { ITMTYPE_FILTER } from './ItemTypeTypes'

export const itmTypeFilter = (typeValue = '') => {
  return {
    type: ITMTYPE_FILTER,
    payload: typeValue
  }
}
