import {
	takeLatest,
	call,
	put,
	takeEvery,
	take,
	fork
} from "redux-saga/effects";

import * as actions from "./ac";
import rsf from "./firebase";

function* initUserWorker(data) {
	try {
		yield put({type: actions.INIT_USER_SUCCESS, payload: data.payload});
	}
	catch (e) {
		yield put({type: actions.INIT_USER_FAILURE, payload: e});
	}
}

function* fetchStoriesWorker(info) {
	const user = info.payload || info;
	const data = yield call(rsf.database.read, `stories/${user}`);
	yield put({type: actions.FETCH_STORIES_SUCCESS, payload: data});
}

function* newStoryWorker(data) {
	const {payload} = data;
	const task = yield call(
		rsf.storage.uploadFile,
		`img/${payload.user}/${payload.img.name}`,
		payload.img.img
	);
	payload.image = yield task.metadata.downloadURLs[0];
	const key = yield call(rsf.database.create, `stories/${payload.user}`, payload);
	yield put({type: actions.NEW_STORY_SUCCESS});
	yield call(fetchStoriesWorker, ...[payload.user]);
}

export function* rootSaga() {
	yield [
		takeEvery(actions.FETCH_STORIES_REQUEST, fetchStoriesWorker),
		takeLatest(actions.NEW_STORY_REQUEST, newStoryWorker),
		takeLatest(actions.INIT_USER_REQUEST, initUserWorker)
	];
}
