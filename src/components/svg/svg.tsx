/** @jsx jsx */
import { FunctionComponent } from 'react'
import { jsx, SxStyleProp } from 'theme-ui'

interface ISvgProps {
  /** The icon path */
  path: string
  /** The icon title */
  title?: string
  /** Theme UI - sx */
  sx: SxStyleProp
}

export const Svg: FunctionComponent<ISvgProps> = ({ path, title, sx }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentcolor"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      sx={{
        ...sx,
      }}
    >
      <title>{title}</title>
      <path d={path} fill="currentcolor" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}
