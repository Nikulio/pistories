import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { storiesReducer } from "./storiesReducer";
import { userReducer } from "./userReducer";
import { loaderReducer } from "./loaderReducer";
import * as actions from "../ac";

export default combineReducers({
	form: formReducer.plugin({
		newStoryForm: (state, action) => {
			switch (action.type) {
				case actions.NEW_NOTE_SUCCESS:
					return undefined;
				default:
					return state;
			}
		}
	}),
	user: userReducer,
	stories: storiesReducer,
	loader: loaderReducer
});
