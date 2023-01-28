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
                <>
                    <RecipeItem recipe={recipe.frontmatter} />
                    <hr style={{ maxWidth: "700px", width: "90%" }} />
                </>
            ))}
        </div>
    );
};

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
    return (
        <div className={recipeItem}>
            <div
                className={recipeItemImageContainer}
                style={{
                    background: `url(${recipe.featured_image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></div>
            <div className={recipeItemTextContainer}>
                <h2>{recipe.title}</h2>
                <span>{recipe.short_description}</span>
                <br />
                <button
                    className="btn pill"
                    onClick={() => navigate(`recipes/${recipe.slug}`)}
                >
                    Learn more...
                </button>
            </div>
        </div>
    );
};
