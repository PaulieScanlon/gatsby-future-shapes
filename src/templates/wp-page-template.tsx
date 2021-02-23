import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import React, { FunctionComponent } from 'react'
import { Box, Container, Heading, Text } from 'theme-ui'
import { IPage } from '../types'

interface IPageTemplate extends IPage {}

const WpPageTemplate: FunctionComponent<IPageTemplate> = ({ data: { page } }) => {
  const { id, title, content } = page
  return (
    <Box>
      <Container>
        <Heading as="h1" variant="styles.h5">
          {title}
        </Heading>
        <Text>{`id: ${id}`}</Text>
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
