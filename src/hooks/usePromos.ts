import { graphql, useStaticQuery } from 'gatsby'
import { IPromoItem } from '../types'

export const usePromos = (): IPromoItem[] => {
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
