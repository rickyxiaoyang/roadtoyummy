import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/shared/Layout/Layout";
import "../../styles/styles.scss";
import "./recipes.scss";
import {
  Ingredient,
  IngredientItem,
} from "../../components/recipes/Ingredient/Ingredient";
import { DirectionSection } from "../../components/recipes/Direction/Direction";

export default function RecipeTemplate({ data }: { data: any }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const { recipe } = frontmatter;
  const { direction_sections } = recipe;

  return (
    <Layout>
      <RecipeLayout>
        <div>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <img
            className="recipe-featured-image"
            src={frontmatter.featured_image}
          />

          <div>
            <h3>Ingredients</h3>
            {recipe.ingredients.map((ingredient: Ingredient) => (
              <IngredientItem key={ingredient.name} ingredient={ingredient} />
            ))}
          </div>
          <div>
            <h3>Directions</h3>
            {direction_sections.map((section: DirectionSection) => (
              <DirectionSection
                key={section.name}
                section={section}
                hideSectionTitle={direction_sections.length == 1}
              />
            ))}
          </div>
        </div>
      </RecipeLayout>
    </Layout>
  );
}

function RecipeLayout({ children }: { children: JSX.Element }) {
  return <div className="recipe-container">{children}</div>;
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
          direction_sections {
            name
            steps {
              text
              image
            }
          }
        }
      }
    }
  }
`;
