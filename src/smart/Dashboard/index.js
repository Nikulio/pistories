import React, { Component } from "react";
import NewStory from "../NewStory";
import "./index.scss";
import MaterialIcon from "material-icons-react";
import history from "../../history";
import { connect } from "react-redux";

class Dashboard extends Component {
	state = {
		addNewOpen: false
	};

	handleCreateNew = () => {
		this.setState({
			addNewOpen: !this.state.addNewOpen
		});
	};

	clickHandle = e => {
		e.preventDefault();
		const { stories } = this.props;
		let targetElement = e.currentTarget.dataset.id;
		console.log(stories);
		if (stories) {
			Object.keys(stories).map(element => {
				if (targetElement === element) {
					console.log("win");
					history.push({
						pathname: "/story",
						state: {
							title: stories[element].title,
							labels: stories[element].labels,
							text: stories[element].text
						}
					});
				}
			});
		}
	};

	render() {
		const { addNewOpen } = this.state;
		const { stories } = this.props; // ТУТ ВИДИТ
		const dashClass = stories ? "dashboard not-empty" : "dashboard empty";
		let elements = stories ? (
			Object.keys(stories).map(key => {
				let imgUrl = stories[key].img ? stories[key].img : "img/no_image.jpg";
				return (
					<a
						key={key}
						href="/"
						onClick={this.clickHandle}
						data-id={key}
						className="stories__element">
						<img className="stories__element-image" src={imgUrl} alt="image" />
						<div className="overlay" />
						<h2 className="stories__element-title">{stories[key].title}</h2>
						<div className="stories__element-labels">{stories[key].labels}</div>
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

const mapDispatchToProps = {};
export default Dashboard;
