import { graphql, useStaticQuery } from 'gatsby'

export const useMpegs = () => {
  const {
    allWpMediaItem: { edges },
  } = useStaticQuery(graphql`
    query Mpegs {
      allWpMediaItem(filter: { mimeType: { eq: "audio/mpeg" } }) {
        edges {
          node {
            mediaItemUrl
            mimeType
          }
        }
      }
    }
  `)

  return edges
}
