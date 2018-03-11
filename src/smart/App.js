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
    this.props.fetchImages();
    
  }
	render() {
		let { stories, images } = this.props;
    // let arr = [];
    // let res = Object.keys(stories).map(elem => {
    //   arr.push(stories[elem].title);
    // });
		const routes = stories ? (
			Object.keys(stories).map(element => {
				let url = stories[element].title;
				return (
					<Route
						key={stories[element].title}
						path={url}
						render={() => (
							<div className="app">
								<Header />
								<div>new</div>
							</div>
						)}
					/>
				);
			})
		) : (
			<div>Loading...</div>
		);
		return (
			<Switch>
				<Route
					path="/"
					exact
					render={() => (
						<div className="app">
							<Header />
							<Dashboard images={images} stories={stories} />
						</div>
					)}
				/>
				<Route path="/story" component={Story} />
			</Switch>
		);
	}
}

const mapDispatchToProps = {
	fetchStories,
	fetchImages
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
