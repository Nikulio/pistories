import {
	takeLatest,
	call,
	put,
	takeEvery,
	take,
	fork
} from "redux-saga/effects";
import _ from "lodash"


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
	yield put({type: actions.LOADER_ACTIVE});
	const user = info.payload || info;
	const data = yield call(rsf.database.read, `stories/${user}`);
	yield put({type: actions.FETCH_STORIES_SUCCESS, payload: data});
	yield put({type: actions.LOADER_DISABLE});
}

function* newStoryWorker(data) {
	const {payload} = data;
	yield put({type: actions.LOADER_ACTIVE});
	if (!(payload.img.img === undefined)) {
		const task = yield call(
			rsf.storage.uploadFile,
			`img/${payload.user}/${payload.img.name}`,
			payload.img.img
		);
		payload.image = yield task.metadata.downloadURLs[0];
	} else {
		payload.img.name = null;
		payload.img.img = null;
	}
	const key = yield call(rsf.database.create, `stories/${payload.user}/`, payload);
	yield put({type: actions.NEW_STORY_SUCCESS});
	yield call(fetchStoriesWorker, ...[payload.user]);
	yield put({type: actions.LOADER_DISABLE});
}

export function* rootSaga() {
	yield [
		takeEvery(actions.FETCH_STORIES_REQUEST, fetchStoriesWorker),
		takeLatest(actions.NEW_STORY_REQUEST, newStoryWorker),
		takeLatest(actions.INIT_USER_REQUEST, initUserWorker)
	];
}
