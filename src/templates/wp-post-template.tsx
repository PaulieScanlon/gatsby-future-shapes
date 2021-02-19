import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import React, { FunctionComponent } from 'react'
import { Box, Container, Heading } from 'theme-ui'
import { IPage, ITagItem } from '../types'

interface IPostTemplate extends IPage {}

const WpPostTemplate: FunctionComponent<IPostTemplate> = ({ data: { page } }) => {
  const { id, title, content, tags, featuredImage } = page

  const {
    node: { altText, localFile },
  } = featuredImage || { node: { altText: '', localFile: null } }

  return (
    <Box>
      {localFile ? <GatsbyImage alt={altText} image={getImage(localFile)} /> : null}
      <Container>
        <Heading as="h1">{title}</Heading>
        <Heading as="h5">{`id: ${id}`}</Heading>
        <Box as="ul">
          {tags.nodes.map((item: ITagItem, index: number) => {
            const { name } = item

            return (
              <Box key={index} as="li">
                {name}
              </Box>
            )
          })}
        </Box>
        <Box>{parse(content)}</Box>
      </Container>
    </Box>
  )
}

// {
//   wpPost(id: {eq: "cG9zdDoxMjI="}) {
//     id
//     featuredImage {
//       node {
//         altText
//         localFile {
//           childImageSharp {
//             gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//           }
//         }
//       }
//     }
//     title
//     content
//     tags {
//       nodes {
//         name
//       }
//     }
//   }
// }

export const query = graphql`
  query SinglePost($id: String!) {
    page: wpPost(id: { eq: $id }) {
      id
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
      title
      content
      tags {
        nodes {
          name
        }
      }
    }
  }
`

export default WpPostTemplate
