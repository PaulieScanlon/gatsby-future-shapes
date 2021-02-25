import React, { Fragment, FunctionComponent, memo, useEffect, useState } from 'react'
import { IconButton } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import { useSvgs } from '../../hooks/useSvgs'
import { ISvgItem } from '../../types'
import { getRandomInt, getRandomRange } from '../../utils'
import { Svg } from '../svg'

const ROTATION_VALUES = [0, 45, 90, 135, 180, 225, 270, 315, 360]

interface ISoundTileProps {
  /** index */
  index: number
  /** mediaItemUrl  */
  mediaItemUrl: string
  /** triggered from parent keypress  */
  forcePlay: boolean
}

interface IAudioObject {
  /** Path to the sound  */
  path: string
  /** HTMLAudioElement */
  audio: HTMLAudioElement
  /** Length of sound */
  duration: number
  /** Loaded status */
  isLoaded: boolean
}

export const SoundTile: FunctionComponent<ISoundTileProps> = memo(({ index, mediaItemUrl, forcePlay = false }) => {
  const svgItems: ISvgItem[] = useSvgs()
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioObject, setAudioObject] = useState<IAudioObject>({
    path: '',
    audio: null,
    isLoaded: false,
    duration: 0,
  })

  const getTransforms = () =>
    `scale(${getRandomRange(0.2, 4)}) rotate(${
      ROTATION_VALUES[Math.round(getRandomRange(0, ROTATION_VALUES.length))]
    }deg)`
  const getRandomColor = (themeKey: string) => theme.colors[themeKey][getRandomInt(theme.colors[themeKey].length)]
  const getRandomSvg = () => svgItems[getRandomInt(svgItems.length)]

  const [svgObject, setSvgObject] = useState<ISvgItem>(getRandomSvg())
  const [color, setColor] = useState(getRandomColor('solids'))
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor('shades'))

  const [transform, setTransform] = useState(getTransforms())

  const playSound = () => {
    audioObject.audio.play()
    setIsPlaying(true)
    setSvgObject(getRandomSvg())
    setColor(getRandomColor('solids'))
    setBackgroundColor(getRandomColor('shades'))
    setTransform(getTransforms())

    console.log()
  }

  useEffect(() => {
    if (audioObject.audio && forcePlay === true) {
      playSound()
    }
  }, [forcePlay])

  useEffect(() => {
    let audio = new Audio(mediaItemUrl)

    // @TODO not sure if canplaythrough or canplay fire on iOS
    // audio.addEventListener('canplay', () => {
    //   // audio.volume = 1
    //   setAudioObject({
    //     path: mediaItemUrl,
    //     audio: audio,
    //     isLoaded: true,
    //     duration: audio.duration,
    //   })
    // })

    setAudioObject({
      path: mediaItemUrl,
      audio: audio,
      isLoaded: true,
      duration: 1,
    })

    audio.addEventListener('ended', () => {
      setIsPlaying(false)
    })

    audio.addEventListener('error', () => {
      audio = new Audio(mediaItemUrl)
    })
  }, [])

  return (
    <Fragment>
      <IconButton
        key={index}
        disabled={!audioObject.isLoaded || isPlaying}
        onClick={playSound}
        data-index={index}
        sx={{
          color: color,
          backgroundColor: backgroundColor,
        }}
      >
        <Svg
          {...svgObject.node.svgAttributes}
          sx={{
            color: color,
            transform: transform,
            transition: `${audioObject.duration / 3}s ease-out all`,
            filter: 'drop-shadow(6px -4px 4px rgba(0, 0, 0, 0.2))',
            width: '100%',
            height: 'auto',
          }}
        />
      </IconButton>
    </Fragment>
  )
})
