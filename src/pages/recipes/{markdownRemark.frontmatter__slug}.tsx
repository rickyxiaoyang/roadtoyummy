import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/shared/Layout/Layout";
import "../../styles/styles.scss";
import "./recipes.scss";
import {
    Ingredient,
    IngredientItem,
} from "../../components/recipes/Ingredient";

export default function RecipeTemplate({ data }: { data: any }) {
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;
    const { recipe } = frontmatter;

    React.useEffect(() => {
        console.log(recipe.ingredients);
    }, []);
    return (
        <Layout>
            <RecipeLayout>
                <div>
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.date}</p>
                    <img src={frontmatter.featured_image} />

                    <div>
                        <h3>Ingredients</h3>
                        {recipe.ingredients.map((ingredient: Ingredient) => (
                            <IngredientItem ingredient={ingredient} />
                        ))}
                    </div>
                    {/* <div
                        dangerouslySetInnerHTML={{
                            __html: html,
                        }}
                    /> */}
                    {/* <h2>{frontmatter.categories.join(", ")}</h2> */}
                    <h3>Ingredients</h3>
                    <div
                        className="ingredients"
                        dangerouslySetInnerHTML={{
                            __html: recipe.ingredients_markdown.html,
                        }}
                    />
                    <h3>Directions</h3>
                    <div
                        className="directions"
                        dangerouslySetInnerHTML={{
                            __html: recipe.directions_markdown.html,
                        }}
                    />
                </div>
            </RecipeLayout>
        </Layout>
    );
}

function RecipeLayout({ children }: { children: JSX.Element }) {
    return <div>{children}</div>;
}

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                categories
                featured_image
                recipe {
                    ingredients {
                        name
                        amount
                        unit
                    }
                    ingredients_markdown {
                        html
                    }
                    directions_markdown {
                        html
                    }
                }
            }
        }
    }
`;
