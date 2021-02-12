import React from 'react'
import PageLayout from './src/layouts/page-layout'

export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>
}
