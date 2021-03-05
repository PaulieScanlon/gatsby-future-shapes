import { graphql, Link as GatsbyLink } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import React, { Fragment, FunctionComponent } from 'react'
import { Box, Container, Flex, Heading } from 'theme-ui'
import { Modifier } from '../components/modifier'
import { Seo } from '../components/seo'
import { IPage } from '../types'

interface IPostTemplate extends IPage {}

const WpPostTemplate: FunctionComponent<IPostTemplate> = ({ data: { page } }) => {
  const { title, content, tags, featuredImage, svgAttributes, next, previous } = page

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
          {content ? <Box sx={{ mb: 7 }}>{parse(content)}</Box> : null}

          <Flex
            sx={{
              justifyContent: 'space-between',
            }}
          >
            {next ? <GatsbyLink to={next.uri}>{next.title}</GatsbyLink> : null}
            {previous ? <GatsbyLink to={previous.uri}>{previous.title}</GatsbyLink> : null}
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}

// {
//   wpPost(id: {eq: "cG9zdDoxMjI="}) {
//     id
//   }
// }

export const query = graphql`
  query SinglePost($id: String!) {
    page: wpPost(id: { eq: $id }) {
      next {
        title
        uri
        slug
      }
      previous {
        title
        uri
        slug
      }
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
