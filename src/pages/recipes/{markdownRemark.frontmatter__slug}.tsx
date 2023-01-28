import * as React from "react";
import { graphql } from "gatsby";

export default function RecipeTemplate({ data }: { data: any }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    const { recipe } = frontmatter;
    return (
        <RecipeLayout>
            <div>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <img src={frontmatter.featured_image} />
                <h2>{frontmatter.categories.join(", ")}</h2>
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
                <div
                    dangerouslySetInnerHTML={{
                        __html: html,
                    }}
                />
            </div>
        </RecipeLayout>
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
