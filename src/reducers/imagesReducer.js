import * as actions from "../ac";

export function imagesReducer(state = {}, action) {
	switch (action.type) {
		case actions.FETCH_IMAGES:
			return action.payload;
		default:
			return state;
	}
}
