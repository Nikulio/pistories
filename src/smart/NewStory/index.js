import React, {Component} from "react";
import "./index.scss";
import {Field, reduxForm} from "redux-form";
import {createStory} from "../../ac";
import {connect} from "react-redux";
import ImageUploader from "../ImageUploader";
import FileUploader from "../FileUploader";
import {renderField, renderTextarea} from "../../dumb/renderField";
import * as validations from "../../validation";

class NewStoryForm extends Component {
	state = {
		title: ""
	};
	
	fileUploaderHandle = (obj) => {
		this.props.onImageFetch(obj)
	}
	
	render() {
		const {handleSubmit, pristine, reset, submitting} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<Field
					type="text"
					validate={validations.required}
					component={renderField}
					label="Type title of the story"
					name="title"
					onChange={e => {
						this.setState({title: e.target.value});
					}}
				/>
				<Field
					type="text"
					validate={validations.required}
					component={renderField}
					label="Type some labels here"
					name="tags"
				/>
				<Field
					type="text"
					validate={validations.required}
					component={renderTextarea}
					label="Type your memo text here"
					name="text"
				/>
				{this.state.title && (
					// <ImageUploader
					// 	title={this.state.title
					// 		.toLowerCase()
					// 		.split(" ")
					// 		.join("_")}
					// />
					<FileUploader
						fileUploaderHandle={this.fileUploaderHandle}
						name={this.state.title
							.toLowerCase()
							.split(" ")
							.join("_")}
					/>
				)}
				<div className="input-wrap submit-wrap">
					<button className="btn btn-dark" type="submit" disabled={submitting}>
						Submit
					</button>
				</div>
			</form>
		);
	}
}

class NewStory extends Component {
	state = {
		file : {},
	}
	onImageFetching = obj => {
		this.setState({
			file: obj
		})
	};
	submit = data => {
		data.img = {
			name : this.state.file.name,
			img : this.state.file.img,
		};
		this.props.createStory(data);
		this.props.handleOpen();
	};
	
	render() {
		let {isOpen, image} = this.props;
		const isOpenClass = isOpen ? "new-note unfolded" : "new-note folded";
		return (
			<div className={isOpenClass}>
				<h2 className="title">New PiStory</h2>
				<NewStoryForm onImageFetch={this.onImageFetching} onSubmit={this.submit}/>
			</div>
		);
	}
}

const mapDispatchToProps = {
	createStory
};
NewStoryForm = reduxForm({form: "newStoryForm"})(NewStoryForm);

export default connect(state => ({image: state.image}), mapDispatchToProps)(
	NewStory
);
