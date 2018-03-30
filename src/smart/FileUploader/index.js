import React, {Component} from "react";
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {uploadFile} from "../../ac"
import "./index.scss"


class FileUploader extends Component {
	
	state = {
		preview : ""
	};

	onImageDrop = (files) => {
		let {name} = this.props;
		this.setState({
			preview: files[0].preview
		});
		const obj = {
			name : name,
			img : files[0]
		}
		this.props.fileUploaderHandle(obj);
	};
	render() {
		return (
			<div className="input-wrap dropzone-wrap">
				<div className="dropzone">
					<Dropzone
						multiple={false}
						accept="image/*"
						onDrop={this.onImageDrop}>
						<p>Drop an image or click to select a file to upload.</p>
					</Dropzone>
				</div>
				{this.state.preview && (
					<div className="image-preview">
						<img src={this.state.preview} alt=""/>
					</div>
				)}
			</div>
		);
	}
}

const mapDispatchToProps = {
	uploadFile,
}
export default connect(null, mapDispatchToProps)(FileUploader);
