import * as actions from "../ac"

export function storiesReducer(state={}, action) {
  switch (action.type) {
    case actions.CREATE_STORY:
      return state;
    case actions.FETCH_STORIES:
      return action.payload
    default:
      return state
  }
}