import { useStaticQuery, graphql } from 'gatsby'

export const useNavigation = () => {
  return useStaticQuery(graphql`
    query {
      allWpMenuItem {
        edges {
          node {
            label
            id
            path
          }
        }
      }
    }
  `)
}
