// in your gatsby-node.js

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
      }
  
      type Frontmatter {
        recipe: Recipe
      }
  
      type Recipe {
        ingredients_markdown: String @md
        directions_markdown: String @md
      }
    `;
    createTypes(typeDefs);
};
