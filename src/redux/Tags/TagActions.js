import { TAG_FILTER, TAG_DELETE} from './TagTypes'

export const tagFilter = (tagValue = '') => {
  return {
    type: TAG_FILTER,
    payload: tagValue
  }
}
export const tagDelete = (tagValue = '') => {
    return {
      type: TAG_DELETE,
      payload: tagValue
    }
  }