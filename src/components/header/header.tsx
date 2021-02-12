import { Link as GatsbyLink } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import { useMenuItems } from '../../hooks/useMenuItems'

type INavItem = {
  node: {
    label: string
    path: string
  }
}

export const Header: FunctionComponent = () => {
  const menuItems = useMenuItems()

  return (
    <Box as="header" variant="styles.header">
      {menuItems.map((item: INavItem, index: number) => {
        const { label, path } = item.node

        return (
          <GatsbyLink key={index} to={path}>
            {label}
          </GatsbyLink>
        )
      })}
    </Box>
  )
}
