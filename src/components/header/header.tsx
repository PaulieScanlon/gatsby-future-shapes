import { Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

export const Header: FunctionComponent = () => {
  return (
    <Box as="header" variant="styles.header">
      <GatsbyLink to="/">Index</GatsbyLink>
      <GatsbyLink to="/posts">Posts</GatsbyLink>
      <GatsbyLink to="/about">About</GatsbyLink>
      <GatsbyLink to="/svg">Svg</GatsbyLink>
    </Box>
  )
}
