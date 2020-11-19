import React from "react"
import { Box, Grid, Heading, Flex, Button, Link } from "@chakra-ui/react"
import Img from "gatsby-image"

import Container from "../Container"

const CommunitiesGrid = ({ types, resortSlug, typeSlug }) => {
  return (
    <Box as="section" py={16}>
      <Container>
        <Grid
          gridTemplateColumns={["", "", "", "repeat(3,1fr)"]}
          gap={[0, 0, 0, 4]}
        >
          {types.edges.map(type => {
            const { title, slug } = type.node

            return (
              <Box key={slug} bg="white" boxShadow="md">
                {type.node.featuredImage && (
                  <Box position="relative">
                    <Img
                      fluid={
                        type.node.featuredImage.node.imageFile.childImageSharp
                          .fluid
                      }
                    />
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