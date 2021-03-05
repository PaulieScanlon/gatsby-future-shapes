import { YouTube } from 'mdx-embed'
import React, { FunctionComponent } from 'react'
import { Box, Container, Flex, Grid, Heading, Link, Text } from 'theme-ui'
import { Experiment } from '../components/experiment/experiment'
import { GeneralObserver } from '../components/general-observer'
import { Logo } from '../components/logo/logo'
import { PostTile } from '../components/post-tile/post-tile'
import { usePosts } from '../hooks/usePosts'
import { usePromos } from '../hooks/usePromos'
import { IPostItem, IPromoItem } from '../types'

const IndexPage: FunctionComponent = () => {
  const postItems = usePosts()
  const promoItems = usePromos()

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
          <Text>Press any key on your keyboard or click a tile below</Text>
          <Box
            sx={{
              py: 6,
            }}
          >
            <GeneralObserver>
              <Experiment />
            </GeneralObserver>
          </Box>
        </Container>
      </Flex>
    </Grid>
  )
}

export default IndexPage
