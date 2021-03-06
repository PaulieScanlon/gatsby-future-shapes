import { YouTube } from 'mdx-embed'
import React, { FunctionComponent } from 'react'
import { Box, Container, Flex, Grid, Heading, Link, Text } from 'theme-ui'
import { IPromoItem } from '../../types'

interface IYouTubePromoProps extends IPromoItem {
  /** Determins status */
  isFeatured?: boolean
}

export const YouTubePromo: FunctionComponent<IYouTubePromoProps> = ({ isFeatured = false, node }) => {
  const { title, description, link, id } = node.youTubeAttributes

  return (
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
          {isFeatured ? 'Featured Promo' : 'Promo'}
        </Heading>
        <Box>
          <Grid
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
            <YouTube youTubeId={id} />
          </Grid>
        </Box>
      </Container>
    </Flex>
  )
}
