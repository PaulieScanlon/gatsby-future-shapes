import React, { Fragment, FunctionComponent } from 'react'
import { Box, Container, Grid, Heading, Text } from 'theme-ui'
import { PostTile } from '../components/post-tile'
import { Seo } from '../components/seo'
import { YouTubePromo } from '../components/youtube-promo/youtube-promo'
import { usePosts } from '../hooks/usePosts'
import { usePromos } from '../hooks/usePromos'
import { IPostItem, IPromoItem } from '../types'

const PostsPage: FunctionComponent = () => {
  const promoItems = usePromos()

  const postItems: IPostItem[] = usePosts()

  return (
    <Fragment>
      <Seo title="Posts" />
      <Box
        sx={{
          mb: 7,
        }}
      >
        <Container>
          <Heading as="h1" variant="styles.h5">
            Posts
          </Heading>
          <Text variant="subheading">Here&apos;s all the posts</Text>
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

      <YouTubePromo
        node={
          promoItems
            .filter((item: IPromoItem) => !item.node.youTubeAttributes.featured)
            .sort(() => 0.5 - Math.random())
            .slice(0, 1)[0].node
        }
      />
    </Fragment>
  )
}

export default PostsPage
