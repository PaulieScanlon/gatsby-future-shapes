import { Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Box, Flex, Grid, Link } from 'theme-ui'
import { Brand } from '../brand'
import { Svg } from '../svg'

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
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <GatsbyLink to="/posts">Posts</GatsbyLink>
          <GatsbyLink to="/about">About</GatsbyLink>
          <Flex>
            <Link
              aria-label="GitHub"
              href="https://github.com/PaulieScanlon/gatsby-future-shapes"
              target="_blank"
              rel="noopener"
              sx={{
                alignItems: 'center',
                display: 'flex',
                mt: '-2px',
              }}
            >
              <Svg
                path="
      M12,2C6.5,2,2,6.6,2,12.3c0,4.5,2.9,8.4,6.8,9.7c0.5,0.1,0.7-0.2,0.7-0.5c0-0.2,0-0.9,0-1.7c-2.8,0.6-3.4-1.4-3.4-1.4C5.7,17.2,5,16.9,5,16.9c-0.9-0.6,0.1-0.6,0.1-0.6c1,0.1,1.5,1.1,1.5,1.1c0.9,1.6,2.3,1.1,2.9,0.9c0.1-0.7,0.3-1.1,0.6-1.4c-2.2-0.3-4.6-1.1-4.6-5.1c0-1.1,0.4-2,1-2.8C6.5,8.7,6.2,7.7,6.7,6.3c0,0,0.8-0.3,2.7,1.1C10.3,7.1,11.2,7,12,7c0.8,0,1.7,0.1,2.5,0.3c1.9-1.3,2.7-1.1,2.7-1.1c0.5,1.4,0.2,2.5,0.1,2.7c0.6,0.7,1,1.6,1,2.8c0,3.9-2.3,4.8-4.6,5.1c0.4,0.3,0.7,0.9,0.7,1.9c0,1.4,0,2.5,0,2.8c0,0.3,0.2,0.6,0.7,0.5c4-1.4,6.8-5.2,6.8-9.7C22,6.6,17.5,2,12,2z"
                title="GitHub "
              />
            </Link>
          </Flex>
        </Grid>
      </Flex>
    </Box>
  )
}
