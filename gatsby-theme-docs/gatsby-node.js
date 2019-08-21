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
exports.onCreateNode = async (
  { node, getNode, actions, createNodeId, loadNodeContent },
  themeOptions
) => {
  const { createNode } = actions;

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode && fileNode.sourceInstanceName;
  if (node.internal.type !== "Mdx") {
    return;
  }
  const content = await loadNodeContent(node);
  if (node.internal.type === "Mdx" && source === themeOptions.contentPath) {
    createNode({
      name: "Testing",
      id: createNodeId(`${node.id} Docs`),
      node,
      content
    });
  }
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // Data can come from anywhere, but for now create it manually
  const myData = {
    key: 123,
    foo: `The foo field of my node`,
    bar: `Baz`
  };

  const nodeContent = JSON.stringify(myData);

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `MyNodeType`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData)
    }
  };

  const node = Object.assign({}, myData, nodeMeta);
  createNode(node);
};
