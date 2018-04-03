import {
	takeLatest,
	call,
	put,
	takeEvery,
	take,
	fork
} from "redux-saga/effects";
import eventChannel from "redux-saga"

import * as actions from "./ac";
import axios from "axios";
import rsf from "./firebase";


function* fetchStoriesWorker() {
	const data = yield call(rsf.database.read, "stories");
	yield put({ type: actions.FETCH_STORIES_SUCCESS, payload: data });
}

function* newStoryWorker(data) {
	const {payload} = data;
	const task = yield call(rsf.storage.uploadFile, `img/${payload.img.name}`, payload.img.img);
	payload.image = yield task.metadata.downloadURLs[0];
	const key = yield call(rsf.database.create, 'stories', payload);
	yield put({ type: actions.NEW_STORY_SUCCESS});
	yield call(fetchStoriesWorker);
	
}

// const filename = `img/${data.img.name}`;
// const storageRef = fire.storage().ref();
// const imgRef = storageRef.child(filename);
// const response = yield call(function () {
// 	console.log("--- second");
// 	return new Promise(function (resolve, reject) {
// 		console.log("--- third");
// 		imgRef.put(data.img.img).then(function (snap) {
// 			console.log("--- forth");
// 			data.image = snap.metadata.downloadURLs[0];
// 			const res = fire.database().ref("stories").push(data);
// 			resolve(res)
// 		});
// 	})
// });
// yield put({type: actions.NEW_STORY_SUCCESS, payload: response});

export function* rootSaga() {
	yield [
		takeEvery(actions.FETCH_STORIES_REQUEST, fetchStoriesWorker),
		takeLatest(actions.NEW_STORY_REQUEST, newStoryWorker)
	];
}
