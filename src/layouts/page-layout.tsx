import { css, Global } from '@emotion/react'
import '@wordpress/block-library/build-style/editor.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'
import React, { Fragment, FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { useConfig } from '../hooks/useConfig'

const PageLayout: FunctionComponent = ({ children }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useConfig()

  return (
    <Fragment>
      <Global
        styles={css`
          @font-face {
            font-family: 'Helvetica';
            src: url('${siteUrl}/fonts/Helvetica.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Helvetica';
            src: url('${siteUrl}/fonts/Helvetica-Bold.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
          }
        `}
      />
      <Header />
      <Box
        as="main"
        sx={{
          minHeight: '100vh',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Fragment>
  )
}

export default PageLayout
