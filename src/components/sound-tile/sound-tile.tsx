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
  const [svgObject, setSvgObject] = useState<ISvgItem>(svgItems[getRandomInt(svgItems.length)])
  const [color, setColor] = useState(theme.colors.solids[getRandomInt(theme.colors.solids.length)])
  const [backgroundColor, setBackgroundColor] = useState(theme.colors.shades[getRandomInt(theme.colors.shades.length)])
  const [transform, setTransform] = useState(
    `scale(0.${getRandomInt(10)}) ${getRandomInt(2) % 2 ? 'rotate(90deg)' : 'rotate(180deg)'}`,
  )

  const playSound = () => {
    audioObject.audio.play()
    setIsPlaying(true)
    setSvgObject(svgItems[getRandomInt(svgItems.length)])
    setColor(theme.colors.solids[getRandomInt(theme.colors.solids.length)])
    setBackgroundColor(theme.colors.shades[getRandomInt(theme.colors.shades.length)])
    setTransform(`scale(0.${getRandomInt(10)}) ${getRandomInt(2) % 2 ? 'rotate(90deg)' : 'rotate(180deg)'}`)
  }

  useEffect(() => {
    if (audioObject.audio && forcePlay === true) {
      playSound()
    }
  }, [forcePlay])

  useEffect(() => {
    let audio = new Audio(mediaItemUrl)

    audio.addEventListener('canplaythrough', (event: Event) => {
      const { returnValue } = event
      // audio.volume = 1
      setAudioObject({
        path: mediaItemUrl,
        audio: audio,
        isLoaded: returnValue,
        duration: audio.duration,
      })
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
          // boxShadow: 0,
          filter: 'drop-shadow(6px -4px 4px rgba(0, 0, 0, 0.2))',
        }}
      />
    </IconButton>
  )
}
