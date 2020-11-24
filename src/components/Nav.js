import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Grid,
  MenuItem,
  Box,
  Link,
  Button,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import Img from "gatsby-image"

import BookNavResort from "./Forms/BookNavResort"

const Nav = () => {
  const resorts = useStaticQuery(graphql`
    query GetResortsNav {
      wpgraphql {
        communityParents {
          edges {
            node {
              name
              slug
              communityParentMeta {
                city
                state
                featuredImage {
                  guid
                  imageFile {
                    childImageSharp {
                      fluid(maxWidth: 230, maxHeight: 165, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
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
    <Flex direction={["", "", "", "row"]} alignItems={["", "", "", "center"]}>
      {resorts.wpgraphql.communityParents && (
        <Menu placement="bottom" autoSelect={false}>
          {({ isOpen }) => {
            return (
              <>
                <MenuButton
                  as={Button}
                  h="full"
                  px={0}
                  fontWeight="600"
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
                  minW="50rem"
                  mt="-8px"
                  p={6}
                  borderTop={0}
                  borderLeft={1}
                  borderRight={1}
                  borderBottom={1}
                  borderColor="primary.6"
                  borderRadius={0}
                >
                  <Grid
                    templateColumns={["", "", "", "repeat(4,1fr)"]}
                    gap={[0, 0, 0, 3]}
                  >
                    {resorts.wpgraphql.communityParents.edges.map(resort => {
                      const {
                        name,
                        slug,
                        communityParentMeta: { featuredImage, city, state },
                      } = resort.node

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
                          {featuredImage.imageFile && (
                            <Img
                              fluid={
                                featuredImage.imageFile.childImageSharp.fluid
                              }
                            />
                          )}
                          {city && state && (
                            <Box as="span" display="block" mt={2}>
                              {city}, {state}
                            </Box>
                          )}
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
                  </Grid>
                  <Flex justifyContent="center" mt={6}>
                    <Link
                      to="/"
                      fontSize="18px"
                      fontWeight="600"
                      color="primary.1"
                      textTransform="uppercase"
                    >
                      View All{" "}
                      <Box as="span" color="primary.2">
                        &rsaquo;
                      </Box>
                    </Link>
                  </Flex>
                </MenuList>
              </>
            )
          }}
        </Menu>
      )}
      <Menu placement="bottom-end" autoSelect={false}>
        <MenuButton
          as={Button}
          h="full"
          ml={10}
          px={0}
          fontWeight="600"
          textTransform="uppercase"
          rightIcon={<ChevronDownIcon fontSize="21px" color="primary.2" />}
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
          Homes & Lots for Sale
        </MenuButton>
        <MenuList mt="-8px" border={0} borderRadius={0}>
          <MenuItem>Home Listings</MenuItem>
          <MenuItem>Lot Listings</MenuItem>
        </MenuList>
      </Menu>
      <Menu placement="bottom-end" autoSelect={false}>
        <MenuButton
          h="full"
          ml={[0, 0, 0, 10]}
          px={8}
          fontWeight="600"
          color="white"
          textTransform="uppercase"
          textShadow="1px 1px 0 rgba(0,0,0,0.4)"
          bg="primary.2"
        >
          Book Now
        </MenuButton>
        <MenuList mt="-8px" p={3} bg="primary.5" border={0} borderRadius={0}>
          <BookNavResort />
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Nav
