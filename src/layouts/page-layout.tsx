import React, { Fragment, FunctionComponent } from 'react'
import { Header } from '../components/header/header'

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}

export default PageLayout
