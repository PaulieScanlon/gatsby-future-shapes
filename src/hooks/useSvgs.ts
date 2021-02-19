import { graphql, useStaticQuery } from 'gatsby'

export const useSvgs = () => {
  const {
    allWpSvg: { edges },
  } = useStaticQuery(graphql`
    query Svgs {
      allWpSvg {
        edges {
          node {
            id
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
