import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { usersReducer } from "./usersReducer";
import { storiesReducer } from "./storiesReducer";
// import { imagesReducer } from "./imagesReducer";
import { imageReducer } from "./imageReducer";
import * as actions from "../ac"

export default combineReducers({
	form: formReducer.plugin({
    newStoryForm: (state, action) => {
      switch(action.type) {
        case actions.NEW_NOTE_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  }),
	users: usersReducer,
	stories: storiesReducer,
	image: imageReducer
});
