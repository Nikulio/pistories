import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";

import { Link } from "react-router-dom";

const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	}
});

class Login extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="login">
				<div className="overlay" />
				<video autoPlay muted loop id="myVideo">
					<source src="/back.mp4" type="video/mp4" />
				</video>
				<Link to="/app">
					<Button
						variant="raised"
						size="large"
						color="primary"
						className={classes.button}>
						Launch
					</Button>
				</Link>
			</div>
		);
	}
}

const LoginComp = withStyles(styles)(Login);

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(LoginComp);
