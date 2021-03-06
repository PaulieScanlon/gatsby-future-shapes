import { graphql, useStaticQuery } from 'gatsby'
import { ITagItem } from '../types'

export const useTags = (): ITagItem[] => {
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
