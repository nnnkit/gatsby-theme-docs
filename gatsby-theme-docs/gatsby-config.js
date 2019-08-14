module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Elementary"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `./content/docs/`
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
