import React, { useEffect } from "react";

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
}: {
    section: DirectionSection;
    hideSectionTitle: boolean;
}) {
    return (
        <div className="direction-section">
            {hideSectionTitle ? <></> : <h4>{section.name}</h4>}
            <ol>
                {section.steps.map((step, index) => (
                    <DirectionItem key={index} direction={step} />
                ))}
            </ol>
        </div>
    );
}

function DirectionItem({ direction }: { direction: Direction }) {
    return <li>{direction.text}</li>;
}
