const path = require("path");
const fs = require("fs");
let basePath, contentPath, assetPath;

exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  basePath = themeOptions.basePath || "/";
  contentPath = themeOptions.contentPath || "content/post";
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
