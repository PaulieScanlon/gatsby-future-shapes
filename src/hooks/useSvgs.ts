import { graphql, useStaticQuery } from 'gatsby'
import { ISvgItem } from '../types'

export const useSvgs = (): ISvgItem[] => {
  const {
    allWpSvg: { edges },
  } = useStaticQuery(graphql`
    query Svgs {
      allWpSvg {
        edges {
          node {
            svgAttributes {
              title
              path
            }
          }
        }
      }
    }
  `)

  return edges
}
