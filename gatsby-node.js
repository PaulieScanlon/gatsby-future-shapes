const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
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

  await Promise.all(
    pages.map(async (edge, index) => {
      const { id, uri } = edge.node
      await actions.createPage({
        component: resolve('./src/templates/wp-page-template.tsx'),
        path: uri,
        context: {
          id: id,
        },
      })
    }),
  )

  await Promise.all(
    posts.map(async (edge, index) => {
      const { id, uri } = edge.node
      await actions.createPage({
        component: resolve('./src/templates/wp-post-template.tsx'),
        path: uri,
        context: {
          id: id,
        },
      })
    }),
  )
}
