import * as actions from "../ac";

export function imageReducer(state = {}, action) {
	switch (action.type) {
		case actions.IMAGE_LOADED:
			return action.payload;
		case actions.FETCH_IMAGES:
			return action.payload;
		default:
			return state;
	}
}
