import React, { FunctionComponent, useEffect, useState } from 'react'
import { Grid } from 'theme-ui'
import { useMpegs } from '../../hooks/useMpegs'
import { ISoundItem } from '../../types'
import { getRandomInt } from '../../utils'
import { SoundTile } from '../sound-tile/sound-tile'

export const Experiment: FunctionComponent = () => {
  const mpegItems: ISoundItem[] = useMpegs().slice(0, 15)

  const [randNum, setRandNum] = useState(null)

  useEffect(() => {
    document.addEventListener('keypress', () => {
      setRandNum(getRandomInt(mpegItems.length))
    })
  }, [])

  return (
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
  )
}
