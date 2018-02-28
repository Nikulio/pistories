import fire from "../firebase"

export const SUBMIT_USER = "SUBMIT_USER";
export const FETCH_USERS = "FETCH_USERS";

// .ref("users/" + element + "/notes/")
export const submitUser = (data) => async dispatch => {
  const user = await fire.database().ref("users").push(data);
  return dispatch({
    type: SUBMIT_USER
  })
};

export const fetchUsers = () => async dispatch => {
  const user = await fire.database().ref("users").on("value", ((snap) => {
    dispatch({
      type: FETCH_USERS,
      payload: snap.val()
    })
  }))
};

