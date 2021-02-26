/** @jsx jsx */
import { FunctionComponent, memo } from 'react'
import { jsx, SxStyleProp } from 'theme-ui'

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
        filter: 'drop-shadow(6px -4px 4px rgba(0, 0, 0, 0.2))',
      }}
    >
      <title>{title}</title>
      <path d={path} fill="currentcolor" />
    </svg>
  )
})
