import React, { Component } from "react";
import NewStory from "../NewStory";
import "./index.scss";
import { loadImage } from "../../ac";
import MaterialIcon from "material-icons-react";
import history from "../../history";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import _ from "lodash";
import Spinner from "../../dumb/Spinner";

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
		if (stories) {
			Object.keys(stories).map(element => {
				if (targetElement === element) {
					let imgUrl = stories[element].image
						? stories[element].image
						: "img/no_image.png";
					history.push({
						pathname: "/story",
						state: {
							title: stories[element].title,
							image: imgUrl,
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
		const { stories } = this.props;
		const storiesStatus = !_.isEmpty(stories);
		const newStoryActive = this.state.addNewOpen;
		const dashClass = storiesStatus ? "dashboard not-empty" : "dashboard empty";
		let newStoryClass = "create-new not-empty";
		if (storiesStatus) {
			newStoryClass += " visible";
		}
		if (newStoryActive) {
			newStoryClass += " active";
		}
		let elements = storiesStatus ? (
			Object.keys(stories).map(key => {
				let imgUrl = stories[key].image
					? stories[key].image
					: "img/no_image.png";
				return (
					<Link
						key={key}
						to="/"
						onClick={this.clickHandle}
						data-id={key}
						style={{ backgroundImage: `url(${imgUrl})` }}
						className="stories__element">
						<div className="overlay" />
						<h2 className="stories__element-title">{stories[key].title}</h2>
						<div className="stories__element-labels">{stories[key].labels}</div>
					</Link>
				);
			})
		) : (
			<div className="stories__element loading">
				<Spinner />
			</div>
		);
		const content = stories ? (
			<div className="stories">{elements}</div>
		) : (
			<div>
				<div className="create-new" onClick={this.handleCreateNew}>
					<MaterialIcon icon="add" color="#68edc6" size={100} />
					<h2 className="create-new__title">Add new</h2>
				</div>
			</div>
		);
		return (
			<div className={dashClass}>
				<NewStory handleOpen={this.handleCreateNew} isOpen={addNewOpen} />
				<div onClick={this.handleCreateNew} className={newStoryClass}>
					<MaterialIcon icon="add" color="#000" />
					create new
				</div>
				{content}
			</div>
		);
	}
}

const mapDispatchToProps = { loadImage };
export default connect(null, mapDispatchToProps)(Dashboard);
