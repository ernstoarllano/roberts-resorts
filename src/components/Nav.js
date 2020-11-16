import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, List, ListItem } from "@chakra-ui/core"

const Nav = () => {
  const navItems = useStaticQuery(graphql`
    query GetPrimaryNav {
      wpgraphql {
        menu(id: "TWVudToxNg==") {
          menuItems {
            edges {
              node {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {navItems.wpgraphql.menu.menuItems && (
        <Box as="nav">
          <List>
            {navItems.wpgraphql.menu.menuItems.edges.map(navItem => {
              const { label, menuItemId } = navItem.node

              return <ListItem key={menuItemId}>{label}</ListItem>
            })}
          </List>
        </Box>
      )}
    </>
  )
}

export default Nav
