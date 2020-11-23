import React from "react"
import { Box, Grid, Heading, Flex, Button, Link } from "@chakra-ui/react"
import Img from "gatsby-image"

import Container from "../Container"

const RelatedCommunities = ({ communities, resortSlug, typeSlug }) => {
  return (
    <Box as="section" py={16} bg="gray.50">
      <Container>
        <Box textAlign="center">
          <Heading as="h1">You May Also Like</Heading>
        </Box>
        <Grid
          gridTemplateColumns={["", "", "", "repeat(3,1fr)"]}
          gap={[0, 0, 0, 4]}
          mt={16}
        >
          {communities.edges.map(community => {
            const { title, slug, communityStatuses } = community.node

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
              <Box key={slug} bg="white" boxShadow="md">
                {community.node.featuredImage && (
                  <Box position="relative" overflow="hidden">
                    <Img
                      fluid={
                        community.node.featuredImage.node.imageFile
                          .childImageSharp.fluid
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
                    {community.node.communityMeta.price && (
                      <Box as="span">${community.node.communityMeta.price}</Box>
                    )}
                    {community.node.communityMeta.bedrooms &&
                      community.node.communityMeta.bathrooms && (
                        <Box as="span" mx={3}>
                          |
                          <Box as="span" pl={3}>
                            {community.node.communityMeta.bedrooms} BR
                          </Box>
                          <Box as="span" mx={1}>
                            /
                          </Box>
                          <Box as="span" pr={3}>
                            {community.node.communityMeta.bathrooms} BA
                          </Box>
                          |
                        </Box>
                      )}
                    {community.node.communityMeta.lotNumber && (
                      <Box as="span">
                        Lot #{community.node.communityMeta.lotNumber}
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

export default RelatedCommunities
