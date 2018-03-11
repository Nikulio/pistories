import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "../Header"
import "./index.scss"

class Story extends Component {
  render() {
    const {title, labels, text, image} = this.props.location.state;
    return (
        <div>
          <Header/>
          <div className="story-full">
            <div className="story-full__image">
              <img src={image} alt=""/>
            </div>
            <h1 className="story-full__title">
              {title}
            </h1>
            <h2 className="story-full__labels">
              {labels}
            </h2>
            <div className="story-full__text">
              <p>
                {text}
              </p>
            </div>
          </div>
        </div>
    )
  }
}

export default connect(state => ({image: state.image}), null)(Story);
