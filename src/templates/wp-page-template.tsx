import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import React, { FunctionComponent } from 'react'
import { Box, Container, Heading } from 'theme-ui'
import { IPage } from '../types'

interface IPageTemplate extends IPage {}

const WpPageTemplate: FunctionComponent<IPageTemplate> = ({ data: { page } }) => {
  const { title, content } = page
  return (
    <Box>
      <Container>
        <Heading as="h1" variant="styles.h5">
          {title}
        </Heading>
        <Box>{parse(content)}</Box>
      </Container>
    </Box>
  )
}

export const query = graphql`
  query SinglePage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`

export default WpPageTemplate
