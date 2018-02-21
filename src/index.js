import App from "./containers/App";
import React from "react"
import ReactDOM from "react-dom"
import reducers from "./reducers"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import "./scss/index.scss"
import "normalize.css/normalize.css"
import {Router} from 'react-router-dom'
import history from "./history"


const store = createStore(
    reducers,
    {},
    applyMiddleware()
);

ReactDOM.render(
    <Router history={history}>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>,
    document.getElementById('root')
);

