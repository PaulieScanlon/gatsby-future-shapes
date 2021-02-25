import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'
import { Box, Grid, Label, Slider } from 'theme-ui'
import { useTags } from '../../hooks/useTags'
import { ITagItem } from '../../types'
import { Svg } from '../svg'

const ROTATE = 'rotate'
const ROTATE_DEFAULT_VALUE = 0
const SCALE_DEFAULT_VALUE = 95

interface IModifierProps {
  /** svgAttributes */
  svgAttributes: {
    title: string
    path: string
  }
  /** tags from the page */
  tags: {
    nodes: ITagItem[]
  }
}

interface ICssTransforms {
  type: string
  css: string
  // eslint-disable-next-line
  values: any
  // values: ITransformValues
}

interface ITransformValues {
  [key: string]: ITransformShape
}

interface ITransformShape {
  name: string
  value: number
}

const sliderConfig = (name: string) => {
  return name === ROTATE
    ? {
        min: 0,
        max: 360,
      }
    : {
        min: 10,
        max: 100,
      }
}

const cssConfig = (cssTransforms: ITransformValues) => {
  return Object.entries(cssTransforms.values)
    .map((item) => item[1])
    .reduce((items, item) => {
      const { name, value } = item as ITransformShape
      ;(items as string[]).push(name === ROTATE ? `${name}(${value}deg)` : `${name}(${(value / 100).toFixed(1)})`)
      return items
    }, [])
    .toString()
    .split(',')
    .join(' ')
}

export const Modifier: FunctionComponent<IModifierProps> = ({ svgAttributes, tags }) => {
  const [cssTransforms, setCssTransform] = useState<ICssTransforms>({ type: '', css: null, values: null })

  const tagItems = useTags()

  useEffect(() => {
    const initialTransforms = tagItems.reduce((items, item) => {
      const { name } = item.node
      items[item.node.name] = {
        name: name,
        value: name === ROTATE ? ROTATE_DEFAULT_VALUE : SCALE_DEFAULT_VALUE,
      }
      return items
    }, {})

    setCssTransform({
      type: svgAttributes.title,
      css: cssConfig({ values: initialTransforms }),
      values: {
        ...initialTransforms,
      },
    })
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event

    setCssTransform({
      ...cssTransforms,
      css: cssConfig({ values: cssTransforms.values }),
      values: {
        ...cssTransforms.values,
        [name]: {
          name: name,
          value: value,
        },
      },
    })
  }

  return (
    <Box>
      {cssTransforms.values ? (
        <Grid
          sx={{
            gap: 7,
            gridTemplateColumns: ['1fr', '1fr 300px'],
            mb: 7,
          }}
        >
          <Grid
            sx={{
              rowGap: 4,
            }}
          >
            {tagItems.map((item, index: number) => {
              const { name } = item.node

              const isDisabled = tags.nodes.every((val) => val.name !== name)

              return (
                <Grid
                  key={index}
                  sx={{
                    rowGap: 1,
                  }}
                >
                  <Label
                    htmlFor={name}
                    sx={{
                      color: isDisabled ? 'midGrey' : 'inherit',
                    }}
                  >
                    {name}
                  </Label>
                  <Slider
                    name={name}
                    disabled={isDisabled}
                    value={cssTransforms.values[name].value}
                    onChange={handleChange}
                    {...sliderConfig(name)}
                  />
                </Grid>
              )
            })}
          </Grid>
          <Box
            sx={{
              boxShadow: 0,
              overflow: 'hidden',
            }}
          >
            <Svg
              {...svgAttributes}
              sx={{
                color: 'primary',
                transformOrigin: 'center center',
                transform: cssTransforms.css,
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
      ) : null}
    </Box>
  )
}
