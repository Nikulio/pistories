import React, { Component } from "react";

class Story extends Component {
	render() {
		console.log(this.props.location.state.title);
		console.log(this.props.location.state.labels);
		console.log(this.props.location.state.text);
		return <div>Story</div>;
	}
}

export default Story;
