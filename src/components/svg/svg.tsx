/** @jsx jsx */
import { FunctionComponent, memo } from 'react'
import { jsx, SxStyleProp } from 'theme-ui'
// import { getRandomInt } from '../../utils'

interface ISvgProps {
  /** The icon path */
  path: string
  /** The icon title */
  title?: string
  /** Theme UI - sx */
  sx?: SxStyleProp
}

export const Svg: FunctionComponent<ISvgProps> = memo(({ path, title, sx }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      width="24px"
      height="24px"
      sx={{
        ...sx,
      }}
    >
      <title>{title}</title>
      <path d={path} fill="currentcolor" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
})
