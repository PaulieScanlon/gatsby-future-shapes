import { YouTube } from 'mdx-embed'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Box, Button, Container, Flex, Grid, Heading, Link, Text } from 'theme-ui'
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
      <Flex
        as="section"
        sx={{
          alignItems: 'center',
          backgroundColor: 'lightGrey',
          minHeight: '100%',
          height: ['30vh', '50vh'],
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
          }}
        >
          <Logo />
          <Text
            sx={{
              fontSize: 0,
              color: 'darkGrey',
              textAlign: 'center',
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
        </Container>
      </Flex>

      <Box as="section" sx={{ alignItems: 'center' }}>
        <Container>
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
        <Container>
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
        </Container>
      </Flex>

      <Flex as="section" sx={{ alignItems: 'center' }}>
        <Container>
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
        </Container>
      </Flex>

      <Flex as="footer" sx={{ alignItems: 'center' }}>
        <Container>
          <Text>Footer</Text>
        </Container>
      </Flex>
    </Grid>
  )
}

export default IndexPage
