import { graphql, useStaticQuery } from 'gatsby'
import { ITagNode } from '../types'

export const useTags = (): ITagNode[] => {
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
