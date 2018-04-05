import React, {Component} from "react";
import "./index.scss";
import {Field, reduxForm, reset} from "redux-form";
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
		file : {}
	};
	onImageFetching = obj => {
		this.setState({
			file: obj
		})
	};
	submit = data => {
		const {user} = this.props;
		data.img = {
			name : this.state.file.name,
			img : this.state.file.img,
		};
		data.user = user;
		this.props.createStory(data);
		this.props.handleOpen();
		this.setState({
			submit: true
		})
	};
	
	render() {
		let {isOpen} = this.props;
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

const afterSubmit = (result, dispatch) =>
	dispatch(reset('newStoryForm'));
NewStoryForm = reduxForm({
	form: "newStoryForm",
	onSubmitSuccess: afterSubmit,
})(NewStoryForm);

export default connect(state => ({user: state.user}), mapDispatchToProps)(
	NewStory
);
