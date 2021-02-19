import { Link as GatsbyLink } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'
import { Box, Container, Grid, Heading, Text } from 'theme-ui'
import { usePosts } from '../hooks/usePosts'

type IPostItem = {
  node: {
    title: string
    link: string
    thumbnailImage: {
      image: {
        altText: string
        // eslint-disable-next-line
        localFile: any
      }
    }
  }
}

const PostsPage: FunctionComponent = () => {
  const posts = usePosts()

  return (
    <Box>
      <Container>
        <Heading as="h1">Posts</Heading>
        <Grid
          sx={{
            gridTemplateColumns: ['1fr', '1fr 1fr 1fr'],
            gap: 2,
          }}
        >
          {posts.map((item: IPostItem, index: number) => {
            const {
              title,
              link,
              thumbnailImage: { image },
            } = item.node

            const { altText, localFile } = image || { altText: '', localFile: null }

            return (
              <Box key={index} sx={{ position: 'relative' }}>
                <GatsbyLink to={link}>
                  <Text
                    sx={{
                      position: 'absolute',
                      top: (theme) => `${theme.space[2]}px`,
                      left: (theme) => `${theme.space[2]}px`,
                      zIndex: 1,
                    }}
                  >
                    {title}
                  </Text>

                  {localFile ? <GatsbyImage alt={altText} image={getImage(localFile)} /> : null}
                </GatsbyLink>
              </Box>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default PostsPage
