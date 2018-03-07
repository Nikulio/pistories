import React, { Component } from "react";
import NewStory from "../NewStory";
import "./index.scss";
import MaterialIcon from "material-icons-react";

class Dashboard extends Component {
	state = {
		addNewOpen: false
	};

	handleCreateNew = () => {
		this.setState({
			addNewOpen: !this.state.addNewOpen
		});
	};

	render() {
		const { addNewOpen } = this.state;
		const { stories } = this.props;
		const dashClass = stories ? "dashboard not-empty" : "dashboard empty";
		let elements = stories ? (
			Object.keys(stories).map(key => {
				let imgUrl = stories[key].img ? stories[key].img : "img/no_image.jpg";
				return (
					<a key={key} href="/" className="stories__element">
						{/*<img src='img/no_image.jpg' alt=""/>*/}
						<img className="stories__element-image" src={imgUrl} alt="image" />
						<div className="overlay" />
						<h2 className="stories__element-title">{stories[key].title}</h2>
						<div className="stories__element-labels">{stories[key].labels}</div>
						{/*<div>{stories[key].text}</div>*/}
					</a>
				);
			})
		) : (
			<div>Loading...</div>
		);
		const content = stories ? (
			<div className="stories">
				<div
					className="create-new stories__element"
					onClick={this.handleCreateNew}>
					<div className="overlay" />
					<h2 className="create-new__title">
						<MaterialIcon icon="add" size={48} color="#000" />
						Add new
					</h2>
				</div>
				{elements}
			</div>
		) : (
			<div>
				<div className="create-new" onClick={this.handleCreateNew}>
					<MaterialIcon icon="alarm_add" color="#68edc6" size={100} />
					<h2 className="create-new__title">Add new</h2>
				</div>
			</div>
		);
		return (
			<div className={dashClass}>
				<NewStory isOpen={addNewOpen} />
				{content}
			</div>
		);
	}
}

export default Dashboard;
