import { graphql, useStaticQuery } from 'gatsby'

export const useFooter = () => {
  const {
    allWpMenu: { edges },
  } = useStaticQuery(graphql`
    query Footer {
      allWpMenu(filter: { name: { eq: "footer" } }) {
        edges {
          node {
            name
            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  return edges[0].node.menuItems.nodes
}
