import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./smart/App";
import { Router } from "react-router-dom";
import history from "./history";
import reducers from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { CookiesProvider } from "react-cookie";

import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { rootSaga } from "./sagas";

import "./scss/index.scss";
import "./scss/colors.scss";
import "./scss/reset.scss";
import "./scss/fonts.scss";

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
	reducers,
	compose(applyMiddleware(sagaMiddleware, ReduxThunk), reduxDevTools)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<CookiesProvider>
		<Provider store={store}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>
	</CookiesProvider>,
	document.getElementById("root")
);
