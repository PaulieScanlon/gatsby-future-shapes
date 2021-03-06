import React, { FunctionComponent } from 'react'
import { Box, Grid } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import { useSvgs } from '../../hooks/useSvgs'
import { ISvgItem } from '../../types'
import { getRandomInt, getRandomRange } from '../../utils'
import { Svg } from '../svg'

export const RandomShapes: FunctionComponent = () => {
  const svgItems: ISvgItem[] = useSvgs()

  const getRandomColor = (themeKey: string) => theme.colors[themeKey][getRandomInt(theme.colors[themeKey].length)]
  const getTransforms = () =>
    `translate3d(${getRandomRange(-50, 50)}px,${getRandomRange(-50, 50)}px,0) scale(${getRandomRange(
      1,
      6,
    )}) rotate(${Math.floor(getRandomRange(0, 180))}deg)`

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        width: 'full',
        height: 'full',
        overflow: 'hidden',
        p: [4, 7],
        opacity: 0.3,
      }}
    >
      <Grid
        sx={{
          placeItems: 'center',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 6,
          height: 'full',
        }}
      >
        {svgItems.map((item: ISvgItem, index: number) => {
          const {
            node: { svgAttributes },
          } = item
          return (
            <Svg
              key={index}
              {...svgAttributes}
              sx={{
                color: getRandomColor('shades'),
                transform: getTransforms(),
              }}
            />
          )
        })}
      </Grid>
    </Box>
  )
}
