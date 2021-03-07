import { graphql, useStaticQuery } from 'gatsby'

export const usePosts = () => {
  const {
    allWpPost: { edges },
  } = useStaticQuery(graphql`
    query Posts {
      allWpPost(sort: { order: DESC, fields: date }) {
        edges {
          node {
            thumbnailImage {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 80
                      layout: FULL_WIDTH
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
            id
            date
            link
            title
            tags {
              nodes {
                name
              }
            }
            content
          }
        }
      }
    }
  `)

  return edges
}
