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
        name: `docs`,
        path: `content/docs`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    "gatsby-plugin-theme-ui",
    "gatsby-theme-sidebar"
  ]
};
