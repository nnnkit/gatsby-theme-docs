const fs = require("fs");
const path = require("path");

// Creating the folders for content of it doesn't exist
module.exports = ({ reporter, store }, themeOptions) => {
  const contentPath = themeOptions.contentPath || "content/docs";
  const assetPath = themeOptions.assetPath || "content/assets";

  const {
    program: { directory }
  } = store.getState();
  const dirs = [
    path.join(directory, contentPath),
    path.join(directory, assetPath)
  ];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.info(`Creating ${dir} directory`);
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};
