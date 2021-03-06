import React, { Fragment, FunctionComponent } from 'react'
import { Box, Container, Flex, Grid, Heading } from 'theme-ui'
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
      <Flex
        as="section"
        sx={{
          alignItems: 'center',
          backgroundColor: 'lightGrey',
          py: 7,
        }}
      >
        <YouTubePromo
          node={
            promoItems
              .filter((item: IPromoItem) => !item.node.youTubeAttributes.featured)
              .sort(() => 0.5 - Math.random())
              .slice(0, 1)[0].node
          }
        />
      </Flex>
    </Fragment>
  )
}

export default PostsPage
