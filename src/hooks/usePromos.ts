import { graphql, useStaticQuery } from 'gatsby'

export const usePromos = () => {
  const {
    allWpYouTubePromo: { edges },
  } = useStaticQuery(graphql`
    query Promos {
      allWpYouTubePromo(sort: { order: DESC, fields: date }) {
        edges {
          node {
            youTubeAttributes {
              featured
              title
              description
              link
              id
            }
          }
        }
      }
    }
  `)

  return edges
}
