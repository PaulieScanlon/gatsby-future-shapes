import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import React, { FunctionComponent } from 'react'
import { Box, Container, Heading } from 'theme-ui'
import { IPage } from '../types'

interface IPageTemplate extends IPage {}

const WpPageTemplate: FunctionComponent<IPageTemplate> = ({ data: { page } }) => {
  const { id, title, content } = page
  return (
    <Box>
      <Container>
        <Heading as="h1">{title}</Heading>
        <Heading as="h5">{`id: ${id}`}</Heading>
        <Box>{parse(content)}</Box>
      </Container>
    </Box>
  )
}

export const query = graphql`
  query SinglePage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

export default WpPageTemplate
