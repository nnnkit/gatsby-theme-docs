const path = require("path");
const fs = require("fs");
let basePath, contentPath, assetPath;

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
exports.onCreateNode = ({ node, getNode }) => {
  // console.log(node.internal.type, "in onCreateNode");
  // console.log(node.component, "in component");
  if (node.internal.type === "Mdx") {
    console.log(node.internal, "in mdx");
  }
};
