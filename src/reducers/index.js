import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { usersReducer } from "./usersReducer";
import { storiesReducer } from "./storiesReducer";
import { imageReducer } from "./imageReducer";

export default combineReducers({
	form: formReducer,
	users: usersReducer,
	stories: storiesReducer,
	images: imageReducer
});
