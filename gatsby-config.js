require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    name: `Future Shapes`,
    description: `A gatsby-source-wordpress demo`,
    keywords: [`gatsby`, `gatsbyjs`, `gatsby-source-wordpress`],
    siteUrl: `https://gatsbyfutureshapes.gatsbyjs.io/`,
    siteImage: `images/future-shapes-image.jpg`,
    lang: `en-gb`,
    type: `website`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        schema: {
          requestConcurrency: 1,
          previewRequestConcurrency: 1,
          perPage: 1,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
