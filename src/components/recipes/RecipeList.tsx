import React from "React";
import { graphql, navigate, useStaticQuery } from "gatsby";
import {
	recipeList,
	recipeItem,
	recipeItemImageContainer,
	recipeItemTextContainer,
} from "./RecipeList.module.scss";

type Recipe = {
	slug: string;
	title: string;
	date: Date;
	short_description: string;
	featured_image: string;
};

const pageQuery = graphql`
	query allRecipes {
		allMarkdownRemark {
			nodes {
				frontmatter {
					slug
					title
					date(formatString: "MMMM, DD, YYYY")
					short_description
					featured_image
				}
			}
		}
	}
`;

export const RecipeList = () => {
	const data = useStaticQuery(pageQuery);
	const { nodes }: { nodes: any[] } = data?.allMarkdownRemark ?? [];
	return (
		<div className={recipeList}>
			{nodes.map((recipe) => (
				<div key={recipe.slug}>
					<RecipeItem recipe={recipe.frontmatter} />
					<hr
						style={{
							maxWidth: "700px",
							width: "90%",
							opacity: "0.2",
						}}
					/>
				</div>
			))}
		</div>
	);
};

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
	const navigateToRecipe = () => {
		navigate(`recipes/${recipe.slug}`);
	};
	return (
		<div className={recipeItem}>
			<div
				className={recipeItemImageContainer}
				onClick={navigateToRecipe}
				style={{
					background: `url(${recipe.featured_image})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					cursor: "pointer",
				}}
			></div>
			<div className={recipeItemTextContainer}>
				<h2 onClick={navigateToRecipe} style={{ cursor: "pointer" }}>
					{recipe.title.toUpperCase()}
				</h2>
				<span>{recipe.short_description}</span>
				<br />
				<button className="btn filled" onClick={navigateToRecipe}>
					Learn more...
				</button>
			</div>
		</div>
	);
};
