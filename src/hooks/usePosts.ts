import { graphql, useStaticQuery } from 'gatsby'

export const usePosts = () => {
  const {
    allWpPost: { edges },
  } = useStaticQuery(graphql`
    query Posts {
      allWpPost {
        edges {
          node {
            thumbnailImage {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
            }
            id
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
