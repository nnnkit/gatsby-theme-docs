const path = require("path");

module.exports = async (
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
      value: path.posix.join(themeOptions.basePath, dir, name)
    });
    createNodeField({
      node,
      name: `category`,
      value: fileNode.relativeDirectory
    });
  }
};
