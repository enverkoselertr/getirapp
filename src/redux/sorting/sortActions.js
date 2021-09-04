import { SORT_UPDATE } from './sortTypes'

export const sortUpdate = (sortType = '') => {
  return {
    type: SORT_UPDATE,
    payload: sortType
  }
}