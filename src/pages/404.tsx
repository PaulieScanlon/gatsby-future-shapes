import React, { FunctionComponent } from 'react'
import { Container, Heading, Text } from 'theme-ui'

const NotFoundPage: FunctionComponent = () => {
  return (
    <Container>
      <Heading as="h1" variant="styles.h6">
        404
      </Heading>
      <Text>
        Page not found. Kiss me{' '}
        <span role="img" aria-label="Kiss Mark">
          💋
        </span>
      </Text>
    </Container>
  )
}

export default NotFoundPage
