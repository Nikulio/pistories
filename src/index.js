import "regenerator-runtime/runtime";
import React from "react"
import ReactDOM from "react-dom"
import App from "./smart/App"
import {Router} from "react-router-dom"
import history from "./history"
import reducers from "./reducers"
import {Provider} from "react-redux"
import ReduxThunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux"
import "./scss/index.scss"
import "./scss/colors.scss"
import "normalize.css/normalize.css"

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App/>
      </Router>
    </Provider>,
    document.getElementById("root")
);