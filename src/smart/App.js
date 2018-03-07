import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { fetchStories } from "../ac";
import Header from "./Header/index";
import Dashboard from "./Dashboard/index";
import { connect } from "react-redux";

class App extends Component {
	componentWillMount() {
		this.props.fetchStories();
	}
	render() {
		return (
			<div className="app">
				<Header />
				<Dashboard stories={this.props.stories} />
			</div>
		);
	}
}

const mapDispatchToProps = {
	fetchStories
};

export default connect(
	state => ({
		stories: state.stories
	}),
	mapDispatchToProps
)(App);
