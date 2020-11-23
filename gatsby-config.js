module.exports = {
  siteMetadata: {
    title: `Roberts Resorts`,
    description: ``,
    author: `@ernstoarllano`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `roberts-resorts`,
        short_name: `roberts`,
        start_url: `/`,
        background_color: `#232f40`,
        theme_color: `#232f40`,
        display: `minimal-ui`,
        icon: `src/images/roberts-resorts-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `https://robertsresorts.bigrigmedia.com/graphql/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
