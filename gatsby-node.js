const { resolve } = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const {
    data: {
      allWpPage: { edges: pages },
    },
  } = await graphql(`
    query AllPages {
      allWpPage {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `)

  const {
    data: {
      allWpPost: { edges: posts },
    },
  } = await graphql(`
    query AllPosts {
      allWpPost {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `)

  pages.map((edge) => {
    const { id, uri } = edge.node
    return actions.createPage({
      component: resolve('./src/templates/wp-page-template.tsx'),
      path: uri,
      context: {
        id: id,
      },
    })
  })

  posts.map((edge) => {
    const { id, uri } = edge.node
    return actions.createPage({
      component: resolve('./src/templates/wp-post-template.tsx'),
      path: uri,
      context: {
        id: id,
      },
    })
  })
}
