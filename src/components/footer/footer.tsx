import React, { FunctionComponent } from 'react'
import { Box, Container, Flex, Link, Text } from 'theme-ui'
import { useFooter } from '../../hooks/useFooter'

interface IMenuItem {
  /** The name of the footer itme */
  label: string
  /** The url od the footer item */
  url: string
}

export const Footer: FunctionComponent = () => {
  const footerItems = useFooter()

  return (
    <Flex as="footer" variant="styles.footer">
      <Container>
        <Text
          sx={{
            color: 'background',
            mb: 2,
          }}
        >
          <span role="img" aria-label="Sparkles">
            ✨
          </span>
          Credits
        </Text>
        <Box
          as="ul"
          sx={{
            columnCount: [1, 2],
          }}
        >
          {footerItems.map((item: IMenuItem, index: number) => {
            const { label, url } = item

            return (
              <Box key={index} as="li">
                <Link href={url} rel="noopener" target="_blank">
                  {label}
                </Link>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Flex>
  )
}
