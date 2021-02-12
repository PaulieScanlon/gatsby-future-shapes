import React, { Fragment, FunctionComponent } from 'react'
import { Container } from 'theme-ui'
import { Header } from '../components/header/header'

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Container>{children}</Container>
    </Fragment>
  )
}

export default PageLayout
