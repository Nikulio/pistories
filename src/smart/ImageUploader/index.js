import React, { Component } from "react";
import { connect } from "react-redux";
import { loadImage } from "../../ac";
import fire from "../../firebase";
import "./index.scss";
import FileUploader from "react-firebase-file-uploader";

class ImageUploader extends Component {
	state = {
		username: "",
		avatar: "",
		isUploading: false,
		progress: 0,
		avatarURL: ""
	};

	handleChangeUsername = event => {
		this.setState({ username: event.target.value });
	};

	handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

	handleProgress = progress => this.setState({ progress });

	handleUploadError = error => {
		this.setState({ isUploading: false });
		console.error(error);
	};

	handleUploadSuccess = filename => {
		this.props.loadImage(filename);
		this.setState({ avatar: filename, progress: 100, isUploading: false });
	};

	render() {
		return (
			<div className="uploader input-wrap">
				<label>Your image:</label>
				{this.state.isUploading && <p>Progress: {this.state.progress}</p>}
				{this.state.avatarURL && <img src={this.state.avatarURL} />}
				<FileUploader
					accept="img/*"
					name="avatar"
					filename={file => `${this.props.title}_image`}
					storageRef={fire.storage().ref("img")}
					onUploadStart={this.handleUploadStart}
					onUploadError={this.handleUploadError}
					onUploadSuccess={this.handleUploadSuccess}
					onProgress={this.handleProgress}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = {
	loadImage
};
export default connect(null, mapDispatchToProps)(ImageUploader);
