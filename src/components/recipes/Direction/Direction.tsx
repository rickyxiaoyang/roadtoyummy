import React, { useEffect } from "react";
import "./Direction.scss";

type Direction = {
	text: string;
	image?: string;
};

export type DirectionSection = {
	name: string;
	steps: Direction[];
};

export function DirectionSection({
	section,
	hideSectionTitle = false,
	showImages,
}: {
	section: DirectionSection;
	hideSectionTitle: boolean;
	showImages: boolean;
}) {
	return (
		<div className="direction-section">
			{hideSectionTitle ? (
				<></>
			) : (
				<div className="direction-section-title">{section.name}</div>
			)}
			<ol className="direction-list">
				{section.steps.map((step, index) => (
					<DirectionItem key={index} direction={step} showImage={showImages} />
				))}
			</ol>
		</div>
	);
}

function DirectionItem({
	direction,
	showImage,
}: {
	direction: Direction;
	showImage: boolean;
}) {
	return (
		<li className="direction-item">
			<div className="direction-item-text">{direction.text}</div>
			{direction.image && showImage && (
				<div className="direction-item-image">
					<img src={direction.image}></img>
				</div>
			)}
		</li>
	);
}
