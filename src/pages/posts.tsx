import React, { Fragment, FunctionComponent } from 'react'
import { Box, Container, Grid, Heading } from 'theme-ui'
import { PostTile } from '../components/post-tile'
import { Seo } from '../components/seo'
import { usePosts } from '../hooks/usePosts'
import { IPostItem } from '../types'

const PostsPage: FunctionComponent = () => {
  const postItems: IPostItem[] = usePosts()

  return (
    <Fragment>
      <Seo title="Posts" />
      <Box>
        <Container>
          <Heading as="h1" variant="styles.h5">
            Posts
          </Heading>
          <Grid
            sx={{
              gap: 6,
              gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
            }}
          >
            {postItems.map((item: IPostItem, index: number) => {
              return <PostTile key={index} {...item} />
            })}
          </Grid>
        </Container>
      </Box>
    </Fragment>
  )
}

export default PostsPage
