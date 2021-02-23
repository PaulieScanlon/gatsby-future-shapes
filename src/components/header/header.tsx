import { Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Box, Flex, Grid } from 'theme-ui'
import { Brand } from '../brand'

export const Header: FunctionComponent = () => {
  return (
    <Box as="header" variant="styles.header">
      <Flex
        sx={{
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <GatsbyLink to="/">
          <Brand />
        </GatsbyLink>
        <Grid
          sx={{
            gap: 1,
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <GatsbyLink to="/posts">Posts</GatsbyLink>
          <GatsbyLink to="/about">About</GatsbyLink>
        </Grid>
      </Flex>
    </Box>
  )
}
