import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'
import { Box, Container, Grid, Heading, Label, Slider } from 'theme-ui'
import { Svg } from '../components/svg'
import { useTags } from '../hooks/useTags'
import { IPage } from '../types'

const ROTATE = 'rotate'
const ROTATE_DEFAULT_VALUE = 0
const SCALE_DEFAULT_VALUE = 100

interface IPostTemplate extends IPage {}

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

const cssConfig = (cssTransforms: ITransformValues) => {
  return Object.entries(cssTransforms)
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

const WpPostTemplate: FunctionComponent<IPostTemplate> = ({ data: { page } }) => {
  const [cssTransforms, setCssTransform] = useState<ICssTransforms>({ type: '', css: null, values: null })

  const tagItems = useTags()

  const { title, content, tags, featuredImage, svgAttributes } = page

  const {
    node: { altText, localFile },
  } = featuredImage || { node: { altText: '', localFile: null } }

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
      <Box
        sx={{
          mb: 7,
        }}
      >
        {localFile ? <GatsbyImage alt={altText} image={getImage(localFile)} /> : null}
      </Box>
      <Container>
        <Heading as="h1" variant="styles.h6">
          {title}
        </Heading>

        {/* <Box>
          <pre>{JSON.stringify(cssTransforms, null, 2)}</pre>
        </Box> */}

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
            <Svg
              {...svgAttributes}
              sx={{
                color: 'primary',
                transformOrigin: 'center center',
                transform: cssTransforms.css,
              }}
            />
          </Grid>
        ) : null}

        <Box>{parse(content)}</Box>
      </Container>
    </Box>
  )
}

// {
//   wpPost(id: {eq: "cG9zdDoxMjI="}) {
//     id
//     featuredImage {
//       node {
//         altText
//         localFile {
//           childImageSharp {
//             gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//           }
//         }
//       }
//     }
//     title
//     content
//     tags {
//       nodes {
//         name
//       }
//     }
//   }
// }

export const query = graphql`
  query SinglePost($id: String!) {
    page: wpPost(id: { eq: $id }) {
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
      title
      content
      tags {
        nodes {
          name
        }
      }
      svgAttributes {
        path
        title
      }
    }
  }
`

export default WpPostTemplate
