import React, { Fragment, FunctionComponent } from 'react'
import { Container, Heading, Text } from 'theme-ui'
import { Seo } from '../components/seo'

const NotFoundPage: FunctionComponent = () => {
  return (
    <Fragment>
      <Seo title="Kiss me" />
      <Container>
        <Heading as="h1" variant="styles.h5">
          404
        </Heading>
        <Text>
          Page not found. Kiss me{' '}
          <span role="img" aria-label="Kiss Mark">
            💋
          </span>
        </Text>
      </Container>
    </Fragment>
  )
}

export default NotFoundPage
