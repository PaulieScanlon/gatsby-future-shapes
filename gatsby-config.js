require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    name: `gatsby-future-shapes`,
    description: `A gatsby-source-wordpress demo`,
    keywords: [`gatsby`, `gatsbyjs`, `gatsby-source-wordpress`],
    siteUrl: `https://gatsbyfutureshapes.gatsbyjs.io/`,
    siteImage: `https://gatsbyfutureshapes.gatsbyjs.io/images/future-shapes-og-image.jpg`,
    lang: `en-gb`,
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
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
