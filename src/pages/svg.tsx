import React, { FunctionComponent } from 'react'
import { Box, Container, Heading, Text } from 'theme-ui'
// import { useSvgs } from '../hooks/useSvgs'

// type ISvgItem = {
//   node: {
//     svgAttributes: {
//       path: string
//       title?: string
//     }
//   }
// }

const SvgPage: FunctionComponent = () => {
  // const svgs = useSvgs()

  return (
    <Box>
      <Container>
        <Heading as="h1" variant="styles.h5">
          Svg
        </Heading>
        <Text>Whey! A wordpress driven Svg paths!</Text>
        {/* <Grid
          sx={{
            gap: 6,
          }}
        >
          {svgs.map((item: ISvgItem, index: number) => {
            const { path, title } = item.node.svgAttributes
            return (
              <Box key={index}>
                <Text>{title}</Text>
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                  }}
                >
                  <Svg path={path} title={title} />
                </Box>
                <Box as="code">{JSON.stringify(path, null, 2)}</Box>
              </Box>
            )
          })}
        </Grid> */}
      </Container>
    </Box>
  )
}

export default SvgPage
