<p align="center">
  <a href="https://gatsbyfutureshapes.gatsbyjs.io">
    <img alt="Bum Hub" src="https://gatsbyfutureshapes.gatsbyjs.io/images/future-shapes-og-image.jpg" />
  </a>
</p>

<br />

# gatsby-future-shapes

## gatsby-source-wordpress

The docs for: [gatsby-source-wordpress](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/)

The above has an installation section which annoyingly doesn't tell you how to install `gatsby-source-wordpress`,
instead it'll point you to a starter. 🤷‍♂️

For reference here's the starter:
[gatsby-starter-wordpress-blog](https://github.com/gatsbyjs/gatsby-starter-wordpress-blog)

### Install

```sh
yarn add gatsby-source-wordpress
```

You'll also need to install the peer dependencies

```sh
yarn gatsby-plugin-sharp gatsby-transformer-sharp
```

### WP Install

You can search official plugins and install `WP GraphQL` and `WP Gatsby` via Wordpress. Ensure both are "activated" in
the "Manage Plugins" section of your WP site

### Config

The above docs don't show anything for `gatsby-config.js` because it's all hidden away in the starter but...

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://xxx.com/graphql`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
```

### Advanced Custom Fields / Custom Post Types UI

1. Install `Custom Post Type UI` by searching for it from the official plugins, then manually install
   [wpgraphql-for-custom-post-type-ui](https://www.wpgraphql.com/extenstion-plugins/wpgraphql-for-custom-post-type-ui/)
   by downloading it from GitHub as a zip

2. Install `Advanced Custom Fields` by searching for it from the official plugins, then manually install
   [wp-graphql-acf](https://github.com/wp-graphql/wp-graphql-acf) by downloading it from GitHub as a zip

3. Create a Custom Post Type (CPT UI) and right at the bottom in the GraphQL settings make sure "Show in GraphQL" is set
   to true and it has the required "x x Name" settings

4. In Custom Fields set the location to the name of the Custom Post Type which should then surface the "fields" in the
   WP editor for that Customer Post Type

### Wordpress (Gutenberg) CSS

To ensure sure blocks styled using Gutenberg look the same in the Gatsby build as they do in the Wordpress preview be
sure to installed the below node modules.

[@wordpress/block-library](https://developer.wordpress.org/block-editor/packages/packages-block-library/)

[@wordpress/block-editor](https://developer.wordpress.org/block-editor/packages/packages-block-editor/)
