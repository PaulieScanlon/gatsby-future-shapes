import React, { FunctionComponent, useEffect, useState } from 'react'
import { Grid } from 'theme-ui'
import { useMpegs } from '../../hooks/useMpegs'
import { ISoundItem } from '../../types'
import { getRandomInt } from '../../utils'
import { SoundTile } from '../sound-tile/sound-tile'

const EXCLUDED_KEYS = ['Space']
const MAX_TILES = 15

export const Experiment: FunctionComponent = () => {
  const mpegItems: ISoundItem[] = useMpegs()
    .sort(() => 0.5 - Math.random())
    .slice(0, MAX_TILES)

  const [randNum, setRandNum] = useState(null)

  useEffect(() => {
    document.addEventListener('keypress', (event: KeyboardEvent) => {
      if (EXCLUDED_KEYS.includes(event.code)) {
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
    </Grid>
  )
}
