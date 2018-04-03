import "regenerator-runtime/runtime";
import React from "react"
import ReactDOM from "react-dom"
import App from "./smart/App"
import {Router} from "react-router-dom"
import history from "./history"
import reducers from "./reducers"
import {Provider} from "react-redux"
import createSagaMiddleware from "redux-saga"

import ReduxThunk from "redux-thunk";
import {createStore, applyMiddleware, compose} from "redux"
import {rootSaga} from "./sagas"

import "./scss/index.scss"
import "./scss/colors.scss"
import "normalize.css/normalize.css"

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
	reducers,
	compose(applyMiddleware(sagaMiddleware, ReduxThunk), reduxDevTools),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App/>
		</Router>
	</Provider>,
	document.getElementById("root")
);