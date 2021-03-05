import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import React, { Fragment, FunctionComponent } from 'react'
import { Box, Container, Heading } from 'theme-ui'
import { Modifier } from '../components/modifier'
import { Seo } from '../components/seo'
import { IPage } from '../types'

interface IPostTemplate extends IPage {}

const WpPostTemplate: FunctionComponent<IPostTemplate> = ({ data: { page } }) => {
  const { title, content, tags, featuredImage, svgAttributes } = page

  const {
    node: { altText, localFile },
  } = featuredImage || { node: { altText: '', localFile: null } }

  return (
    <Fragment>
      <Seo title={title} />
      <Box
        sx={{
          mb: 7,
        }}
      >
        <Box
          sx={{
            mb: 7,
          }}
        >
          {localFile ? <GatsbyImage alt={altText} image={getImage(localFile)} /> : null}
        </Box>
        <Container>
          <Heading as="h1" variant="styles.h5">
            {title}
          </Heading>

          <Modifier svgAttributes={svgAttributes} tags={tags} />
          {content ? <Box>{parse(content)}</Box> : null}
        </Container>
      </Box>
    </Fragment>
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
      svgAttributes {
        path
        title
      }
    }
  }
`

export default WpPostTemplate
