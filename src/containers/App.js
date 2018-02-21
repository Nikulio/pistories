import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "./Header"
import Login from "./Login"
import {Switch, Route, withRouter} from "react-router-dom"

class App extends Component {
  render() {
    return (
        <Switch>
          <Route
              exact
              path='/'
              component={Login}
          />
          <Route
              
              path='/app'
              component={() => (
                  <div className="app">
                    <Header/>
                  </div>
              )}
          />
        </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(
    mapStateToProps,
)(App));
