import React, { Component } from "react";
import "./index.scss";
import { Field, reduxForm } from "redux-form";
import { createStory } from "../../ac";
import { connect } from "react-redux";
import ImageUploader from "../ImageUploader";
import { renderField } from "../../dumb/renderField";

class NewStoryForm extends Component {
	state = {
		title: ""
	};

	handleUploadSuccess = data => {
		console.log(data);
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit}>
				<div className="input-wrap">
					<Field
						type="text"
						component="input"
						placeholder="Type title of the story"
						name="title"
						onChange={e => {
							this.setState({ title: e.target.value });
						}}
					/>
				</div>
				<div className="input-wrap">
					<Field
						type="text"
						component="input"
						placeholder="Type some labels here"
						name="tags"
					/>
				</div>
				<div className="input-wrap">
					<Field
						type="text"
						component="textarea"
						placeholder="Type your memo text here"
						name="text"
					/>
				</div>
				<ImageUploader
					title={this.state.title
						.toLowerCase()
						.split(" ")
						.join("_")}
					onImageLoad={this.handleUploadSuccess}
				/>
				<div className="input-wrap submit-wrap">
					<button className="btn btn-dark" type="submit">
						Submit
					</button>
				</div>
			</form>
		);
	}
}

class NewStory extends Component {
	submit = data => {
	  data.image = this.props.image;
		this.props.createStory(data);
		this.props.handleOpen();
	};

	render() {
		let { isOpen, image } = this.props;
		console.log("targ image", image);
		const isOpenClass = isOpen ? "new-note unfolded" : "new-note folded";
		return (
			<div className={isOpenClass}>
				<h2 className="title">New PiStory</h2>
				<NewStoryForm onSubmit={this.submit} />
			</div>
		);
	}
}

const mapDispatchToProps = {
	createStory
};
NewStoryForm = reduxForm({ form: "newStoryForm" })(NewStoryForm);

export default connect(state => ({ image: state.image }), mapDispatchToProps)(
	NewStory
);
