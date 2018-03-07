import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"
import {usersReducer} from "./usersReducer"
import {storiesReducer} from "./storiesReducer"

export default combineReducers({
  form : formReducer,
  users: usersReducer,
  stories: storiesReducer
})