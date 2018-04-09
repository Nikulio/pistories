import * as actions from "../ac";

export function loaderReducer(state = {}, action) {
	switch (action.type) {
		case actions.LOADER_ACTIVE:
			return true;
		case actions.LOADER_DISABLE:
			return false;
		default:
			return state;
	}
}
