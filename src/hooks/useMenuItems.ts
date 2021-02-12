import { graphql, useStaticQuery } from 'gatsby'

export const useMenuItems = () => {
  const {
    allWpMenuItem: { edges },
  } = useStaticQuery(graphql`
    query MenuItems {
      allWpMenuItem {
        edges {
          node {
            label
            path
          }
        }
      }
    }
  `)

  return edges
}
