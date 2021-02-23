import { YouTube } from 'mdx-embed'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Box, Button, Container, Grid, Heading, Link, Text } from 'theme-ui'
import { Logo } from '../components/logo/logo'
import { PostTile } from '../components/post-tile/post-tile'
import { useMpegs } from '../hooks/useMpegs'
import { usePosts } from '../hooks/usePosts'
import { usePromos } from '../hooks/usePromos'
import { IPostItem, IPromoItem } from '../types'

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
  const postItems = usePosts()
  const mpegItems = useMpegs()
  const promoItems = usePromos()

  const [mpegs, setMpegs] = useState<IMpegItem[]>([])

  useEffect(() => {
    setMpegs(
      mpegItems.map(
        (item: ISoundItem): IMpegItem => {
          const { mediaItemUrl } = item.node
          return {
            path: mediaItemUrl,
            audio: new Audio(mediaItemUrl),
          }
        },
      ),
    )
  }, [])

  return (
    <Grid
      sx={{
        gap: 7,
      }}
    >
      <Box
        as="section"
        sx={{
          backgroundColor: 'lightGrey',
          px: [6, 8],
          py: 8,
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            maxWidth: ['full', 380],
          }}
        >
          <Logo />
          <Text
            sx={{
              fontSize: 0,
              color: 'darkGrey',
            }}
          >
            A{' '}
            <Link
              href="https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/"
              target="_blank"
              rel="noopener"
              sx={{
                color: 'darkGrey',
              }}
            >
              gatsby-source-wordpress
            </Link>{' '}
            demo by
            <Link href="https://twitter.com/PaulieScanlon" target="_blank" rel="noopener">
              @PaulieScanlon
            </Link>
          </Text>
        </Box>
      </Box>
      <Container
        sx={{
          display: 'grid',
          gap: 8,
        }}
      >
        <Box as="section">
          <Heading as="h2" variant="styles.h5">
            Latest Posts
          </Heading>

          <Grid
            sx={{
              gap: 6,
              gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
            }}
          >
            {postItems.slice(0, 3).map((item: IPostItem, index: number) => {
              return <PostTile key={index} {...item} />
            })}
          </Grid>
        </Box>

        <Box as="section">
          <Heading as="h2" variant="styles.h5">
            Promo
          </Heading>
          <Box>
            {promoItems.slice(0, 1).map((item: IPromoItem, index: number) => {
              const { title, description, link, id } = item.node.youTubeAttributes

              return (
                <Grid
                  key={index}
                  sx={{
                    gap: 4,
                    gridTemplateColumns: ['1fr', '1fr 1fr', '2fr 1fr'],
                  }}
                >
                  <Box>
                    <Heading as="h3" variant="styles.h6">
                      {title}
                    </Heading>
                    <Text sx={{ mb: 3 }}>{description}</Text>
                    <Link href={link} target="_blank" rel="noopener" sx={{ fontSize: 0, textTransform: 'uppercase' }}>
                      more info
                    </Link>
                  </Box>
                  <Box>
                    <YouTube youTubeId={id} />
                  </Box>
                </Grid>
              )
            })}
          </Box>
        </Box>

        <Box as="section">
          <Heading as="h2" variant="styles.h5">
            The Experiment
          </Heading>
          <Grid
            sx={{
              gap: 2,
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
      <Box as="footer">
        <Text>Footer</Text>
      </Box>
    </Grid>
  )
}

export default IndexPage
