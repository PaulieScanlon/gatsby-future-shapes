import { Link as GatsbyLink } from 'gatsby'
import React, { Fragment, FunctionComponent } from 'react'
import { Box, Container, Flex, Grid, Heading, Link, Text } from 'theme-ui'
import { Experiment } from '../components/experiment/experiment'
import { GeneralObserver } from '../components/general-observer'
import { Logo } from '../components/logo/logo'
import { PostTile } from '../components/post-tile/post-tile'
import { RandomShapes } from '../components/random-shapes/random-shapes'
import { Seo } from '../components/seo'
import { YouTubePromo } from '../components/youtube-promo/youtube-promo'
import { usePosts } from '../hooks/usePosts'
import { usePromos } from '../hooks/usePromos'
import { IPostItem, IPromoItem } from '../types'

const IndexPage: FunctionComponent = () => {
  const postItems = usePosts()
  const promoItems = usePromos()

  return (
    <Fragment>
      <Seo />
      <Grid
        sx={{
          gap: 7,
          pb: 7,
        }}
      >
        <Flex
          as="section"
          sx={{
            position: 'relative',
            alignItems: 'center',
            backgroundColor: 'lightGrey',
            minHeight: '100%',
            height: '40vh',
            px: [4, 0],
          }}
        >
          <RandomShapes />
          <Container
            sx={{
              textAlign: 'center',
              zIndex: 1,
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
              demo by{' '}
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
            <Text variant="subheading">Here&apos;s the latest posts</Text>
            <Grid
              sx={{
                gap: 6,
                gridTemplateColumns: ['1fr', '1fr', '1fr 1fr 1fr'],
                mb: 7,
              }}
            >
              {postItems.slice(0, 3).map((item: IPostItem, index: number) => {
                return <PostTile key={index} {...item} />
              })}
            </Grid>

            <Flex
              sx={{
                justifyContent: 'center',
                a: { variant: 'buttons.primary' },
              }}
            >
              <GatsbyLink to="/posts">More Posts</GatsbyLink>
            </Flex>
          </Container>
        </Box>

        <YouTubePromo
          isFeatured={true}
          node={promoItems.filter((item: IPromoItem) => item.node.youTubeAttributes.featured)[0].node}
        />

        <Flex as="section" sx={{ alignItems: 'center' }}>
          <Container>
            <Heading as="h2" variant="styles.h5">
              The Experiment
            </Heading>
            <Text variant="subheading">Press any key on your keyboard or click a tile below</Text>
            <GeneralObserver>
              <Experiment />
            </GeneralObserver>
          </Container>
        </Flex>
      </Grid>
    </Fragment>
  )
}

export default IndexPage
