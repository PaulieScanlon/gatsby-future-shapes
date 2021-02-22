import { graphql, useStaticQuery } from 'gatsby'

export const useTags = () => {
  const {
    allWpTag: { edges },
  } = useStaticQuery(graphql`
    query Tags {
      allWpTag {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  return edges
}
