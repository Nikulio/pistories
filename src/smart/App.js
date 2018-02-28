import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom"
import {fetchUsers} from "../ac"
import Header from "./Header/index"
import Dashboard from "./Dashboard/index"
import {connect} from "react-redux"


class App extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  render() {
    return (
        <div className="app">
          <Header />
          {/*<Dashboard />*/}
        </div>
    );
  }
}
const mapDispatchToProps = {
    fetchUsers
}

export default connect(null, mapDispatchToProps)(App);
