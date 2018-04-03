import fire from "../firebase";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_STORIES = "FETCH_STORIES";
export const IMAGE_LOADED = "IMAGE_LOADED";

export const CREATE_STORY = "CREATE_STORY";
export const NEW_NOTE_SUCCESS = "NEW_NOTE_SUCCESS";

export const NEW_STORY_REQUEST = "NEW_STORY_REQUEST";
export const NEW_STORY_SUCCESS = "NEW_STORY_SUCCESS";
export const NEW_STORY_FAILURE = "NEW_STORY_FAILURE";

export const FETCH_STORIES_REQUEST = "FETCH_STORIES_REQUEST";
export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const FETCH_STORIES_FAILURE = "FETCH_STORIES_FAILURE";


export const loadImage = title => async dispatch => {
	const storage = await fire.storage().ref("img");
	console.log(title);
	storage
		.child(title)
		.getDownloadURL()
		.then(url => {
			return dispatch({
				type: IMAGE_LOADED,
				payload: url
			});
		})
		.catch(error => console.log("log from ac", error));
};


export const createStory = (data) => {
	return {
		type: NEW_STORY_REQUEST,
		payload: data
	}
};


export const fetchStories = () => {
	return {
		type: FETCH_STORIES_REQUEST
	}
};

