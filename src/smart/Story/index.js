import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import StoryDumb from "../../dumb/StoryDumb";
import "./index.scss";

class Story extends Component {
	render() {
		const { title, labels, text, image } = this.props.location.state;
		return (
			<div>
				<Header />
				<StoryDumb title={title} labels={labels} text={text} image={image} />
			</div>
		);
	}
}

export default connect(state => ({ image: state.image }), null)(Story);
