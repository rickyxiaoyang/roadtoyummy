import React from "react";
import { toFraction } from "../../utils/recipe";

export type Ingredient = {
    name: string;
    unit: string;
    amount: number;
};

export function IngredientItem({ ingredient }: { ingredient: Ingredient }) {
    return (
        <div className="ingredient-item">
            {toFraction(ingredient.amount)} {ingredient.unit} {ingredient.name}
        </div>
    );
}
