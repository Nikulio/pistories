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

export function* rootSaga() {
	yield [
		takeEvery(actions.FETCH_STORIES_REQUEST, fetchStoriesWorker),
		takeLatest(actions.NEW_STORY_REQUEST, newStoryWorker)
	];
}
