import fire from "../firebase";

export const NEW_STORY_REQUEST = "NEW_STORY_REQUEST";
export const NEW_STORY_SUCCESS = "NEW_STORY_SUCCESS";
export const NEW_STORY_FAILURE = "NEW_STORY_FAILURE";

export const FETCH_STORIES_REQUEST = "FETCH_STORIES_REQUEST";
export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const FETCH_STORIES_FAILURE = "FETCH_STORIES_FAILURE";

export const INIT_USER_REQUEST = "INIT_USER_REQUEST";
export const INIT_USER_SUCCESS = "INIT_USER_SUCCESS";
export const INIT_USER_FAILURE = "INIT_USER_FAILURE";

export const initUser = (id) => {
	return {
		type: INIT_USER_REQUEST,
		payload: id
	};
};

export const createStory = data => {
	return {
		type: NEW_STORY_REQUEST,
		payload: data
	};
};

export const fetchStories = (user) => {
	return {
		type: FETCH_STORIES_REQUEST,
		payload: user
	};
};
