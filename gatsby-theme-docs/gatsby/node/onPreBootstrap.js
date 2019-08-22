const fs = require("fs");
const path = require("path");
let basePath, contentPath, assetPath;

// Creating the folders for content of it doesn't exist
module.exports = ({ reporter, store }, themeOptions) => {
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
