import React, { FunctionComponent, useEffect, useState } from 'react'
import { IconButton } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import { useSvgs } from '../../hooks/useSvgs'
import { ISvgItem } from '../../types'
import { getRandomInt } from '../../utils'
import { Svg } from '../svg'

console.log(theme)

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
  const [color, setColor] = useState(theme.colors.shapes[getRandomInt(theme.colors.shapes.length)])

  const playSound = () => {
    console.log('playSound')
    audioObject.audio.play()
    setIsPlaying(true)
    setSvgObject(svgItems[getRandomInt(svgItems.length)])
    setColor(theme.colors.shapes[getRandomInt(theme.colors.shapes.length)])
  }

  useEffect(() => {
    if (audioObject.audio && forcePlay === true) {
      playSound()
    }
  }, [forcePlay])

  useEffect(() => {
    const audio = new Audio(mediaItemUrl)

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
  }, [])

  return (
    <IconButton
      key={index}
      disabled={!audioObject.isLoaded || isPlaying}
      onClick={playSound}
      data-index={index}
      sx={{
        color: color,
        width: '100%',
        height: 'auto',
      }}
    >
      <Svg {...svgObject.node.svgAttributes} />
    </IconButton>
  )
}
