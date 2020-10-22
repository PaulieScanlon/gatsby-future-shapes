const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const {
    data: {
      allWpPage: { edges },
    },
  } = await graphql(`
    query {
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

  await Promise.all(
    edges.map(async (edge, index) => {
      const { id, uri } = edge.node
      await actions.createPage({
        component: resolve('./src/templates/page-template.js'),
        path: uri,
        context: {
          id: id,
        },
      })
    })
  )
}
