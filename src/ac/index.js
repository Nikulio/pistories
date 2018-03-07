import fire from "../firebase";

export const CREATE_STORY = "CREATE_STORY";
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_STORIES = "FETCH_STORIES";

// .ref("users/" + element + "/notes/")

export const createStory = (data) => async dispatch => {
  const story = await fire
      .database()
      .ref("stories")
      .push(data)
};

export const fetchStories = () => async dispatch => {
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
