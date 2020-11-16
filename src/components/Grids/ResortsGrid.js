import React from "react"
import {
  Grid,
  Box,
  Heading,
  ButtonGroup,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react"
import Img from "gatsby-image"

import Container from "../Container"

const ResortsGrid = ({ resorts }) => {
  return (
    <>
      {resorts.wpgraphql.communities && (
        <Box as="section" py={16} bg="gray.100">
          <Container>
            <Box textAlign="center">
              <Box
                className="cms-content"
                dangerouslySetInnerHTML={{
                  __html: resorts.wpgraphql.page.content,
                }}
              />
            </Box>
            <Grid
              templateColumns={["", "", "", "repeat(4,1fr)"]}
              gap={[0, 0, 0, 4]}
              mt={14}
              mb={16}
            >
              {resorts.wpgraphql.communities.edges.map(resort => {
                const {
                  id,
                  title,
                  communityMeta: { campspotSlug },
                  featuredImage,
                  age,
                  city,
                  state,
                  slug,
                } = resort.node

                return (
                  <Box key={id} bg="white" boxShadow="md">
                    {featuredImage && (
                      <Img
                        fluid={featuredImage.imageFile.childImageSharp.fluid}
                      />
                    )}
                    <Box position="relative" px={5} pt={8} pb={10}>
                      {age[0].name && (
                        <Box
                          as="span"
                          position="absolute"
                          top={-4}
                          mb={-4}
                          px={8}
                          py={1}
                          color="white"
                          textTransform="uppercase"
                          bg="primary.3"
                        >
                          {age[0].name}
                        </Box>
                      )}
                      <Heading as="h4">{title}</Heading>
                      {city[0].name && state[0].name && (
                        <Box
                          as="span"
                          display="block"
                          textTransform="uppercase"
                        >
                          {city[0].name}, {state[0].name}
                        </Box>
                      )}
                      <ButtonGroup mt={3} spacing={4}>
                        <Button
                          color="white"
                          textTransform="uppercase"
                          bg="primary.1"
                          borderRadius={0}
                        >
                          <Link href={`/resort/${slug}`}>View Resort</Link>
                        </Button>
                        {campspotSlug && (
                          <Button
                            color="white"
                            textTransform="uppercase"
                            bg="primary.2"
                            borderRadius={0}
                          >
                            <Link
                              href={`https://www.campspot.com/book/${campspotSlug}`}
                              isExternal
                            >
                              Book Now
                            </Link>
                          </Button>
                        )}
                      </ButtonGroup>
                    </Box>
                  </Box>
                )
              })}
            </Grid>
            <Flex justifyContent="center">
              <Link to="/" fontWeight="600" textTransform="uppercase">
                View All{" "}
                <Box as="span" color="primary.2">
                  &rsaquo;
                </Box>
              </Link>
            </Flex>
          </Container>
        </Box>
      )}
    </>
  )
}

export default ResortsGrid
