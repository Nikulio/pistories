import React, { Component } from "react";
import NewStory from "../NewStory";
import "./index.scss";
import { loadImage } from "../../ac";
import MaterialIcon from "material-icons-react";
import history from "../../history";
import { connect } from "react-redux";
import _ from "lodash"

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
          let imgUrl = stories[element].image ? stories[element].image : "img/no_image.png";
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
		const storiesStatus = (!(_.isEmpty(stories)));
    console.log('---', storiesStatus);
		const dashClass = storiesStatus ? "dashboard not-empty" : "dashboard empty";
		let elements = storiesStatus ? (
			Object.keys(stories).map(key => {
				let imgUrl = stories[key].image ? stories[key].image : "img/no_image.png";
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
			<div className="stories__element loading">
        Loading...
        {/*<MaterialIcon icon="loop" size={48} color="#000" />*/}
      </div>
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
				<NewStory handleOpen={this.handleCreateNew} isOpen={addNewOpen} />
				{content}
			</div>
		);
	}
}

const mapDispatchToProps = { loadImage };
export default connect(null, mapDispatchToProps)(Dashboard);
