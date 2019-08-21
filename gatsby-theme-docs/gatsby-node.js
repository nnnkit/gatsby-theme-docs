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

exports.createPages = ({ actions, reporter }) => {
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/home.js")
  });
};
exports.onCreateNode = async (
  { node, getNode, actions, createNodeId, loadNodeContent },
  themeOptions
) => {
  // Create source field (according to contentPath)

  // const source = fileNode && fileNode.sourceInstanceName;

  if (node.internal.type !== "Mdx") {
    return;
  }

  // const content = await loadNodeContent(node);
  if (node.internal.type === "Mdx") {
    const { createNode, createNodeField } = actions;
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
