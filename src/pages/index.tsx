import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Container, Grid, Heading } from 'theme-ui'
import { useMpegs } from '../hooks/useMpegs'

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
    <Box>
      <Container>
        <Heading as="h1">Index</Heading>
        <Grid>
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
    </Box>
  )
}

export default IndexPage
