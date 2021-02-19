import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Container, Grid, Heading } from 'theme-ui'
import { Logo } from '../components/logo/logo'
import { PostTile } from '../components/post-tile/post-tile'
import { useMpegs } from '../hooks/useMpegs'
import { usePosts } from '../hooks/usePosts'
import { IPostItem } from '../types'

type ISoundItem = {
  node: {
    mediaItemUrl: string
    mimeType: string
  }
}

type IMpegItem = {
  path: string
  audio: HTMLAudioElement
}

const IndexPage: FunctionComponent = () => {
  const posts = usePosts()

  const [mpegs] = useState(
    useMpegs().map(
      (item: ISoundItem): IMpegItem => {
        const { mediaItemUrl } = item.node
        return {
          path: mediaItemUrl,
          audio: new Audio(mediaItemUrl),
        }
      },
    ),
  )

  return (
    <Grid
      sx={{
        gap: 6,
      }}
    >
      <Box as="section">
        <Box
          sx={{
            mx: 'auto',
            px: 3,
            maxWidth: 300,
            width: ['50%', 'full'],
          }}
        >
          <Logo />
        </Box>
      </Box>
      <Container
        sx={{
          display: 'grid',
          gap: 6,
        }}
      >
        <Box as="section">
          <Heading as="h2">Latest Posts</Heading>
          <Grid
            sx={{
              gap: 4,
              gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
            }}
          >
            {posts
              .sort((a, b) => b - a)
              .slice(0, 3)
              .map((item: IPostItem, index: number) => {
                return <PostTile key={index} {...item} />
              })}
          </Grid>
        </Box>

        <Box as="section">
          <Heading as="h2">Promo</Heading>
        </Box>

        <Box as="section">
          <Heading as="h2">The Experiment</Heading>
          <Grid
            sx={{
              gap: 0,
              gridTemplateColumns: ['1fr 1fr', '1fr 1fr 1fr 1fr'],
            }}
          >
            {mpegs.map((item: IMpegItem, index: number) => {
              const { audio } = item
              return (
                <Button key={index} onClick={() => audio.play()}>
                  {`play sound ${index}`}
                </Button>
              )
            })}
          </Grid>
        </Box>
      </Container>
    </Grid>
  )
}

export default IndexPage
