import React, { FunctionComponent, useEffect, useState } from 'react'
import { IconButton } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import { useSvgs } from '../../hooks/useSvgs'
import { ISvgItem } from '../../types'
import { getRandomInt } from '../../utils'
import { Svg } from '../svg'

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

export const SoundTile: FunctionComponent<ISoundTileProps> = ({ index, mediaItemUrl, forcePlay = false }) => {
  const svgItems: ISvgItem[] = useSvgs()
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioObject, setAudioObject] = useState<IAudioObject>({
    path: '',
    audio: null,
    isLoaded: false,
    duration: 0,
  })

  const getTransforms = () =>
    `scale(0.${getRandomInt(100)}) ${getRandomInt(2) % 2 ? 'rotate(90deg)' : 'rotate(180deg)'}`
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
  }

  useEffect(() => {
    if (audioObject.audio && forcePlay === true) {
      playSound()
    }
  }, [forcePlay])

  useEffect(() => {
    let audio = new Audio(mediaItemUrl)

    // @TODO not sure if canplaythroug or canplay fire on iOS
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
      console.log('error')
      audio = new Audio(mediaItemUrl)
    })
  }, [])

  return (
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
          transform: transform,
          transition: `${audioObject.duration / 3}s ease-out all`,
          filter: 'drop-shadow(6px -4px 4px rgba(0, 0, 0, 0.2))',
        }}
      />
    </IconButton>
  )
}
