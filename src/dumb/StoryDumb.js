import React from "react";

const StoryDumb = ({ image, title, labels, text }) => {
	return (
		<div className="story-full">
			<div className="story-full__image">
				<img src={image} alt="image" />
			</div>
			<div className="story-full__content">
				<h1 className="story-full__title">{title}</h1>
				<h2 className="story-full__labels">{labels}</h2>
				<div className="story-full__text">
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default StoryDumb;
