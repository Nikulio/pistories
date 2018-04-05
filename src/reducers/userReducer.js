import * as actions from "../ac";

export function userReducer(state = {}, action) {
	switch (action.type) {
		case actions.INIT_USER_SUCCESS:
			return action.payload ? action.payload : state;
		default:
			return state;
	}
}
