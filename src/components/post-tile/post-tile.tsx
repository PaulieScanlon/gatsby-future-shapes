import { Link as GatsbyLink } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'
import { Card, Text } from 'theme-ui'
import { IPostItem } from '../../types'

interface IPostTileProps extends IPostItem {}

export const PostTile: FunctionComponent<IPostTileProps> = ({
  node: {
    title,
    link,
    thumbnailImage: { image },
  },
}) => {
  const { altText, localFile } = image || { altText: '', localFile: null }

  return (
    <Card>
      <GatsbyLink to={link}>
        <Text
          sx={{
            position: 'absolute',
            top: (theme) => `${theme.space[2]}px`,
            left: (theme) => `${theme.space[2]}px`,
            zIndex: 1,
          }}
        >
          {title}
        </Text>

        {localFile ? <GatsbyImage alt={altText} image={getImage(localFile)} /> : null}
      </GatsbyLink>
    </Card>
  )
}
