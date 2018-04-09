import React, { Component } from "react";
import Spinner from "../../dumb/Spinner";
import './index.scss';

class Loader extends Component {
	render() {
		const { isOpen } = this.props;
		const loaderClass = isOpen ? "loader active" : "loader disabled";
		return (
			<div className={loaderClass}>
				<Spinner />
			</div>
		);
	}
}

export default Loader;
