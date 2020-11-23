import React from "react"
import { Box, Grid, Heading, Flex, Button, Link } from "@chakra-ui/react"
import Img from "gatsby-image"

import Container from "../Container"

const CommunitiesGrid = ({ types, resortSlug, typeSlug }) => {
  return (
    <Box as="section" pt={6} pb={16}>
      <Container>
        <Grid
          gridTemplateColumns={["", "", "", "repeat(3,1fr)"]}
          gap={[0, 0, 0, 4]}
        >
          {types.edges.map(type => {
            const { title, slug, communityStatuses } = type.node

            let color

            switch (communityStatuses.edges[0].node.name) {
              case "Available":
                color = "rgba(57,151,0,0.85)"
                break
              case "Pending":
                color = "rgba(247,184,0,0.85)"
                break
              case "Sold":
                color = "rgba(192,0,0,0.85)"
                break
              default:
                color = "#000000"
                break
            }

            return (
              <Box key={slug} mb={[5, 5, 5, 0]} bg="white" boxShadow="md">
                {type.node.featuredImage && (
                  <Box position="relative" overflow="hidden">
                    <Img
                      fluid={
                        type.node.featuredImage.node.imageFile.childImageSharp
                          .fluid
                      }
                    />
                    <Box
                      position="absolute"
                      top="20px"
                      left="-80px"
                      width="300px"
                      px={4}
                      py={2}
                      fontWeight="600"
                      color="white"
                      textAlign="center"
                      textShadow="1px 1px 0 rgba(0,0,0,0.4)"
                      textTransform="uppercase"
                      transform="rotate(-30deg)"
                      bg={color}
                    >
                      {communityStatuses.edges[0].node.name}
                    </Box>
                  </Box>
                )}
                <Box position="relative" px={5} pt={8} pb={10}>
                  <Heading as="h4">{title}</Heading>
                  <Flex
                    direction="row"
                    alignItems="center"
                    textTransform="uppercase"
                  >
                    {type.node.communityMeta.price && (
                      <Box as="span">${type.node.communityMeta.price}</Box>
                    )}
                    {type.node.communityMeta.bedrooms &&
                      type.node.communityMeta.bathrooms && (
                        <Box as="span" mx={3}>
                          |
                          <Box as="span" pl={3}>
                            {type.node.communityMeta.bedrooms} BR
                          </Box>
                          <Box as="span" mx={1}>
                            /
                          </Box>
                          <Box as="span" pr={3}>
                            {type.node.communityMeta.bathrooms} BA
                          </Box>
                          |
                        </Box>
                      )}
                    {type.node.communityMeta.lotNumber && (
                      <Box as="span">
                        Lot #{type.node.communityMeta.lotNumber}
                      </Box>
                    )}
                  </Flex>
                  <Button
                    mt={3}
                    color="white"
                    textTransform="uppercase"
                    textShadow="1px 1px 0 rgba(0,0,0,0.4)"
                    bg="primary.2"
                    borderRadius={0}
                  >
                    <Link href={`/resort/${resortSlug}/${typeSlug}/${slug}`}>
                      View Listing
                    </Link>
                  </Button>
                </Box>
              </Box>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default CommunitiesGrid
