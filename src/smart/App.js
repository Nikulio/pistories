import React, {Component} from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import {withCookies, Cookies} from 'react-cookie';
import {connect} from "react-redux";

import {fetchStories, initUser} from "../ac";

import Header from "./Header/index";
import Dashboard from "./Dashboard/index";
import Story from "./Story/index";


class App extends Component {
	
	state = {
		user: this.props.cookies.get('userID') || "guest"
	};
	
	componentWillMount() {
		this.initCookie();
		this.props.fetchStories(this.state.user);
		this.props.initUser();
	}
	
	initCookie() {
		const {cookies} = this.props;
		if (!(cookies.get('userID'))) {
			const id = "_" + Math.random().toString(36).substr(2, 9);
			let tomorrow = new Date();
			let today = new Date();
			tomorrow.setDate(today.getDate() + 999);
			cookies.set('userID', id, {path: '/', expires: tomorrow});
			this.props.initUser(cookies.get('userID'))
		}
		else {
			this.props.initUser(cookies.get('userID'))
		}
	};
	
	render() {
		let {stories} = this.props;
		return (
			<Switch>
				<Route
					path="/"
					exact
					render={() => (
						<div className="app">
							<Header/>
							<Dashboard stories={stories}/>
						</div>
					)}
				/>
				<Route exact path="/story" component={Story}/>
			</Switch>
		);
	}
}

const mapDispatchToProps = {
	fetchStories,
	initUser
};

export default withCookies(withRouter(
	connect(
		state => ({
			stories: state.stories,
			user: state.user
		}),
		mapDispatchToProps
	)(App)
));
