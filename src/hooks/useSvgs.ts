import { graphql, useStaticQuery } from 'gatsby'

export const useSvgs = () => {
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
