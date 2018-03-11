import React, { Component } from "react";
import { connect } from "react-redux";

class Story extends Component {
	render() {
		const { title, labels, text } = this.props.location;
		const { image } = this.props;
		console.log("win", image);
		return <div>Story</div>;
	}
}

export default connect(state => ({ image: state.image }), null)(Story);
