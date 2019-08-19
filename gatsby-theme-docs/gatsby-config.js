const path = require("path");
module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Docs"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        extensions: [".mdx", ".md"],
        ignore: ["**/node_modules"],
        name: `content/docs`,
        path: `content/docs`
      }
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`]
      }
    }
  ]
};
