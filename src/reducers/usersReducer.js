import * as actions from "../ac"

export function usersReducer(state={}, action) {
  switch (action.type) {
    case actions.FETCH_USERS:
      return {...state, ...action.payload};
    default:
      return state
  }
}