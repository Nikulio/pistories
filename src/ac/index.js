import fire from "../firebase";

export const CREATE_STORY = "CREATE_STORY";
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_STORIES = "FETCH_STORIES";
export const IMAGE_LOADED = "IMAGE_LOADED";
export const NEW_NOTE_SUCCESS = "NEW_NOTE_SUCCESS";
// export const FETCH_IMAGES = "FETCH_IMAGES";

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

export const createStory = data => async dispatch => {
	const story = await fire
		.database()
		.ref("stories")
		.push(data);
};

export const fetchStories = data => async dispatch => {
	const stories = await fire
		.database()
		.ref("stories")
		.on("value", snap => {
			dispatch({
				type: FETCH_STORIES,
				payload: snap.val()
			});
		});
};
