import React from "react";
import { toFraction } from "../../../utils/recipe";
import "./Ingredient.scss";
export type Ingredient = {
    name: string;
    unit: string;
    amount: number;
};

export function IngredientItem({ ingredient }: { ingredient: Ingredient }) {
    return (
        <div className="ingredient-item">
            <input type="checkbox" />
            {toFraction(ingredient.amount)} {ingredient.unit} {ingredient.name}
        </div>
    );
}
