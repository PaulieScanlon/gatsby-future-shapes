import React, { Fragment, FunctionComponent, memo, useEffect, useRef, useState } from 'react'
import { IconButton } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import { useSvgs } from '../../hooks/useSvgs'
import { ISvgItem } from '../../types'
import { getRandomInt, getRandomRange } from '../../utils'
import { Svg } from '../svg'

interface ISoundTileProps {
  /** index */
  index: number
  /** mediaItemUrl  */
  mediaItemUrl: string
  /** mimeType */
  mimeType: string
  /** triggered from parent keypress  */
  forcePlay: boolean
}

export const SoundTile: FunctionComponent<ISoundTileProps> = memo(
  ({ index, mediaItemUrl, mimeType, forcePlay = false }) => {
    const svgItems: ISvgItem[] = useSvgs()
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [hasLoaded, setHasLoaded] = useState(false)

    const getTransforms = () =>
      `translate3d(0,0,0) scale(${getRandomRange(0.2, 2)}) rotate(${Math.floor(getRandomRange(0, 8)) * 45}deg)`
    const getRandomColor = (themeKey: string) => theme.colors[themeKey][getRandomInt(theme.colors[themeKey].length)]
    const getRandomSvg = () => svgItems[getRandomInt(svgItems.length)]

    const [svgObject, setSvgObject] = useState<ISvgItem>(getRandomSvg())
    const [color, setColor] = useState(getRandomColor('solids'))
    const [backgroundColor, setBackgroundColor] = useState(getRandomColor('shades'))

    const [transform, setTransform] = useState(getTransforms())

    const playSound = () => {
      setIsPlaying(true)
      audioRef.current.play()
      setSvgObject(getRandomSvg())
      setColor(getRandomColor('solids'))
      setBackgroundColor(getRandomColor('shades'))
      setTransform(getTransforms())
    }

    useEffect(() => {
      if (audioRef.current && forcePlay === true) {
        playSound()
      }
    }, [forcePlay])

    return (
      <Fragment key={index}>
        <IconButton
          disabled={!hasLoaded || isPlaying}
          onClick={playSound}
          data-index={index}
          sx={{
            position: 'relative',
            color: color,
            backgroundColor: backgroundColor,
          }}
        >
          <Svg
            {...svgObject.node.svgAttributes}
            sx={{
              color: color,
              transform: transform,
              transition: '.2s ease-out all',
              width: '100%',
              height: 'auto',
            }}
          />
        </IconButton>
        <audio
          ref={audioRef}
          preload="auto"
          onEnded={() => {
            setIsPlaying(false)
          }}
          onCanPlayThrough={() => {
            console.log('onCanPlayThrough: ', index)
            setHasLoaded(true)
          }}
        >
          <source src={mediaItemUrl} type={mimeType} />
        </audio>
      </Fragment>
    )
  },
)
