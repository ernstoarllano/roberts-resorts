import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"

const NavMobile = () => {
  const resorts = useStaticQuery(graphql`
    query GetResortsNavMobile {
      wpgraphql {
        communityParents {
          edges {
            node {
              name
              slug
              communityParentMeta {
                city
                state
              }
            }
          }
        }
      }
    }
  `)

  const onResortClick = slug => {
    window.location.replace(`/resort/${slug}`)
  }

  return (
    <Flex direction="column" pt={8}>
      {resorts.wpgraphql.communityParents && (
        <Menu orientation="vertical" autoSelect={false} matchWidth={true}>
          {({ isOpen }) => {
            return (
              <>
                <MenuButton
                  as={Button}
                  mb={4}
                  px={0}
                  fontWeight="600"
                  textAlign="left"
                  textTransform="uppercase"
                  rightIcon={
                    isOpen ? (
                      <ChevronUpIcon fontSize="21px" color="primary.2" />
                    ) : (
                      <ChevronDownIcon fontSize="21px" color="primary.2" />
                    )
                  }
                  bg="transparent"
                  borderRadius={0}
                  _hover={{
                    backgroundColor: "transparent",
                  }}
                  _active={{
                    backgroundColor: "transparent",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                >
                  RV Resorts
                </MenuButton>
                <MenuList
                  mt="-8px"
                  p={0}
                  border={0}
                  borderRadius={0}
                  boxShadow="none"
                >
                  {resorts.wpgraphql.communityParents.edges.map(resort => {
                    const { name, slug } = resort.node

                    return (
                      <MenuItem
                        key={slug}
                        display="block"
                        px={0}
                        onClick={() => onResortClick(slug)}
                        _hover={{
                          backgroundColor: "transparent",
                        }}
                      >
                        <Box
                          as="span"
                          display="block"
                          fontWeight="600"
                          color="primary.3"
                        >
                          {name}
                        </Box>
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </>
            )
          }}
        </Menu>
      )}
      <Menu placement="bottom-end" autoSelect={false}>
        <MenuButton
          mb={4}
          fontWeight="600"
          textAlign="left"
          textTransform="uppercase"
        >
          Homes & Lots for Sale
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton
          py={2}
          fontWeight="600"
          color="white"
          textTransform="uppercase"
          textShadow="1px 1px 0 rgba(0,0,0,0.4)"
          bg="primary.2"
        >
          Book Now
        </MenuButton>
      </Menu>
    </Flex>
  )
}

export default NavMobile
