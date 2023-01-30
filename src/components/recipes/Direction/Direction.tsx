import React, { useEffect } from "react";

type Direction = {
    text: string;
    image?: string;
};

export type DirectionSection = {
    name: string;
    steps: Direction[];
};

export function DirectionSection({ section }: { section: DirectionSection }) {
    return (
        <div className="direction-section">
            <h4>{section.name}</h4>
            <ol>
                {section.steps.map((step) => (
                    <DirectionItem direction={step} />
                ))}
            </ol>
        </div>
    );
}

function DirectionItem({ direction }: { direction: Direction }) {
    return <li>{direction.text}</li>;
}
