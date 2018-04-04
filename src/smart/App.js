import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { fetchStories, fetchImages } from "../ac";
import Header from "./Header/index";
import Dashboard from "./Dashboard/index";
import Story from "./Story/index";
import { connect } from "react-redux";

class App extends Component {
	componentWillMount() {
		this.props.fetchStories();
	}
	render() {
		let { stories } = this.props;
		return (
			<Switch>
				<Route
					path="/"
					exact
					render={() => (
						<div className="app">
							<Header />
							<Dashboard stories={stories} />
						</div>
					)}
				/>
				<Route exact path="/story" component={Story} />
			</Switch>
		);
	}
}

const mapDispatchToProps = {
	fetchStories
	// fetchImages
};

export default withRouter(
	connect(
		state => ({
			stories: state.stories,
			images: state.images
		}),
		mapDispatchToProps
	)(App)
);
