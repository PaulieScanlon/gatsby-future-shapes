import React, { FunctionComponent, useEffect, useState } from 'react'
import { Grid } from 'theme-ui'
import { useMpegs } from '../../hooks/useMpegs'
import { ISoundItem } from '../../types'
import { getRandomInt } from '../../utils'
import { SoundTile } from '../sound-tile/sound-tile'

const excludedKeys = ['Space']

export const Experiment: FunctionComponent = () => {
  const mpegItems: ISoundItem[] = useMpegs()
    .sort(() => 0.5 - Math.random())
    .slice(0, 15)

  const [randNum, setRandNum] = useState(null)

  useEffect(() => {
    document.addEventListener('keypress', (event: KeyboardEvent) => {
      if (excludedKeys.includes(event.code)) {
        event.preventDefault()
      } else {
        setRandNum(getRandomInt(mpegItems.length))
      }
    })
  }, [])

  return (
    <Grid
      sx={{
        gap: 6,
      }}
    >
      <Grid
        sx={{
          gap: '0px',
          gridTemplateColumns: ['1fr 1fr 1fr', '1fr 1fr 1fr 1fr 1fr'],
        }}
      >
        {mpegItems.map((item: ISoundItem, index: number) => {
          const { mediaItemUrl } = item.node

          return (
            <SoundTile
              key={index}
              index={index}
              mediaItemUrl={mediaItemUrl}
              forcePlay={randNum === index ? true : false}
            />
          )
        })}
      </Grid>
      {/* <Box>
        <Text>Debug</Text>
        <Box as="ul">
          {mpegItems.map((item: ISoundItem, index: number) => {
            const { mediaItemUrl, mimeType } = item.node

            return (
              <Box as="li" key={index} sx={{ fontSize: '8px' }}>
                <Text>{index}</Text>
                <Text>{mediaItemUrl}</Text>
                <audio controls>
                  <source src={mediaItemUrl} type={mimeType} />
                  Your browser does not support the audio element.
                </audio>
              </Box>
            )
          })}
        </Box>
      </Box> */}
    </Grid>
  )
}
