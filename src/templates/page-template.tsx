import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import React, { FunctionComponent } from 'react'
import { Box, Heading } from 'theme-ui'
import { IPage } from '../types'

interface IPageTemplate extends IPage {}

const PageTemplate: FunctionComponent<IPageTemplate> = ({ data: { page } }) => {
  const { id, title, content } = page
  return (
    <Box>
      <Heading as="h1">{title}</Heading>
      <Heading as="h5">{`id: ${id}`}</Heading>
      <Box
        sx={{
          ul: {
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
            li: {
              a: {
                variant: 'text.bold',
              },
            },
          },
        }}
      >
        {parse(content)}
      </Box>
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

export default PageTemplate
