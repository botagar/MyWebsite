import * as types from './actionTypes'

export const setPageBackgroundImg = backgroundImg => {
  return {
    type: types.SET_PAGE_BACKGROUND,
    backgroundImg
  }
}
