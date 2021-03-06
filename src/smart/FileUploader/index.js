import React, {Component} from "react";
import {connect} from "react-redux";
import Dropzone from "react-dropzone";
import {uploadFile} from "../../ac";
import "./index.scss";

class FileUploader extends Component {
	state = {
		preview: "",
		dropzoneShow: true
	};

//TODO: log user id to the actual

	componentWillUnmount() {
		console.log(123);
	}

	onImageDrop = files => {
		let {name} = this.props;
		this.setState({
			preview: files[0].preview
		});
		const obj = {
			name: name,
			img: files[0]
		};
		this.props.fileUploaderHandle(obj);
	};



	render() {
		return (
			<div className="input-wrap dropzone-wrap">
				{this.state.dropzoneShow &&
				<div className="dropzone">
					<Dropzone multiple={false} onDropAccepted={() => this.setState({dropzoneShow: false})}
					          accept="image/*" onDrop={this.onImageDrop}>
						<p>Drop an image or click to select a file to upload.</p>
					</Dropzone>
				</div>
				}
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
	uploadFile
};
export default connect(null, mapDispatchToProps)(FileUploader);
