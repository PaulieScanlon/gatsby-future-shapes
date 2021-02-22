import React, { FunctionComponent } from 'react'
import { Box, Container, Grid, Heading } from 'theme-ui'
import { PostTile } from '../components/post-tile'
import { usePosts } from '../hooks/usePosts'
import { IPostItem } from '../types'

const PostsPage: FunctionComponent = () => {
  const posts = usePosts()

  return (
    <Box>
      <Container>
        <Heading as="h1">Posts</Heading>
        <Grid
          sx={{
            gap: 4,
            gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
          }}
        >
          {posts.map((item: IPostItem, index: number) => {
            return <PostTile key={index} {...item} />
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default PostsPage
