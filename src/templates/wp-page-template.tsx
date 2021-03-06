import { graphql } from 'gatsby'
import React, { Fragment, FunctionComponent } from 'react'
import { Box, Container, Heading } from 'theme-ui'
import { Seo } from '../components/seo'
import { YouTubePromo } from '../components/youtube-promo/youtube-promo'
import { usePromos } from '../hooks/usePromos'
import { IPage, IPromoItem } from '../types'

interface IPageTemplate extends IPage {}

const WpPageTemplate: FunctionComponent<IPageTemplate> = ({ data: { page } }) => {
  const promoItems = usePromos()

  const { title, content, link } = page

  return (
    <Fragment>
      <Seo title={title} canonical={link} />

      <Container>
        <Heading as="h1" variant="styles.h5">
          {title}
        </Heading>
        <Box
          sx={{
            mb: 7,
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>

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

export const query = graphql`
  query SinglePage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      link
    }
  }
`

export default WpPageTemplate
