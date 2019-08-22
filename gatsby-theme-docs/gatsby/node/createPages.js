const path = require("path");

const templatesDir = path.resolve(__dirname, "../../src/templates");
const templates = {
  home: path.resolve(templatesDir, "home.js"),
  docs: path.resolve(templatesDir, "docs.js")
};

module.exports = async ({ actions: { createPage }, graphql }, themeOptions) => {
  const basePath = themeOptions.basePath || "/";
  createPage({
    path: basePath,
    component: templates.home
  });
  const allDocs = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  allDocs.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: templates.docs,
      context: {
        slug: node.fields.slug
      }
    });
  });
};
