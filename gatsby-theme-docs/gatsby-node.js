const path = require("path");
const fs = require("fs");
let basePath, contentPath, assetPath;

// Creating the folders for content of it doesn't exist
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  basePath = themeOptions.basePath || "/";
  contentPath = themeOptions.contentPath || "content/docs";
  assetPath = themeOptions.assetPath || "content/assets";

  const {
    program: { directory }
  } = store.getState();
  const dirs = [
    path.join(directory, contentPath),
    path.join(directory, assetPath)
  ];
  dirs.forEach(dir => {
    reporter.info(`Creating ${dir} directory`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter
}) => {
  createPage({
    path: basePath,
    component: require.resolve("./src/templates/home.js")
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
  // allDocs.data.allMdx.edges.forEach(one => console.log(one, "in foreach"));
  allDocs.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve("./src/templates/docs.js"),
      context: {
        slug: node.fields.slug
      }
    });
  });
};

exports.onCreateNode = async (
  { node, getNode, actions: { createNodeField } },
  themeOptions
) => {
  if (node.internal.type !== "Mdx") {
    return;
  }

  // const content = await loadNodeContent(node);
  if (node.internal.type === "Mdx") {
    const fileNode =
      node.parent && node.parent !== "undefined" ? getNode(node.parent) : node;
    const { dir = ``, name } = path.parse(fileNode.relativePath);
    console.log(dir, name, "in gatsby node");
    createNodeField({
      node,
      name: `slug`,
      value: path.posix.join(`/docs`, dir, name)
    });
    createNodeField({
      node,
      name: `category`,
      value: fileNode.relativeDirectory
    });
  }
};
