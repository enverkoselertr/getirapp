import { BRAND_FILTER, BRAND_DELETE} from './BrandTypes'

export const brandFilter = (brandValue = '') => {
  return {
    type: BRAND_FILTER,
    payload: brandValue
  }
}
export const brandDelete = (brandValue = '') => {
    return {
      type: BRAND_DELETE,
      payload: brandValue
    }
  }