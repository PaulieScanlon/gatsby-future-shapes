import React, { FunctionComponent } from 'react'
import { Box, Container, Heading } from 'theme-ui'

const NotFoundPage: FunctionComponent = () => {
  return (
    <Box>
      <Container>
        <Heading as="h1">404</Heading>
      </Container>
    </Box>
  )
}

export default NotFoundPage
