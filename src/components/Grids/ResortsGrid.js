import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
import LogoSimple from "../Icons/LogoSimple"

const ResortsGrid = () => {
  const resorts = useStaticQuery(graphql`
    query GetResorts {
      wpgraphql {
        page(id: "cGFnZToyMA==") {
          title
          homeMeta {
            resorts
          }
        }
        communityParents {
          edges {
            node {
              name
              slug
              communityParentMeta {
                campspotSlug
                age
                city
                state
                zipcode
                featuredImage {
                  guid
                  imageFile {
                    childImageSharp {
                      fluid(maxWidth: 732, maxHeight: 400, quality: 100) {
                        ...GatsbyImageSharpFluid
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

  return (
    <>
      {resorts.wpgraphql.communityParents && (
        <Box as="section" py={16} bg="gray.100">
          {resorts.wpgraphql.page.homeMeta.resorts && (
            <Container maxW="1400px">
              <Box textAlign="center">
                <LogoSimple />
                <Box
                  className="cms-content"
                  dangerouslySetInnerHTML={{
                    __html: resorts.wpgraphql.page.homeMeta.resorts,
                  }}
                />
              </Box>
            </Container>
          )}
          <Container>
            <Grid
              templateColumns={["", "", "", "repeat(4,1fr)"]}
              gap={[0, 0, 0, 4]}
              mt={14}
              mb={16}
            >
              {resorts.wpgraphql.communityParents.edges.map(resort => {
                const {
                  name,
                  slug,
                  communityParentMeta: {
                    featuredImage,
                    age,
                    city,
                    state,
                    zipcode,
                    campspotSlug,
                  },
                } = resort.node

                return (
                  <Box key={slug} mb={[5, 5, 5, 0]} bg="white" boxShadow="md">
                    {featuredImage.imageFile && (
                      <Img
                        fluid={featuredImage.imageFile.childImageSharp.fluid}
                      />
                    )}
                    <Box position="relative" px={5} pt={8} pb={10}>
                      {age && (
                        <Box
                          as="span"
                          position="absolute"
                          top={-4}
                          mb={-4}
                          px={8}
                          py={1}
                          fontWeight="600"
                          color="white"
                          textTransform="uppercase"
                          bg="primary.3"
                        >
                          {age}
                        </Box>
                      )}
                      <Heading as="h4">{name}</Heading>
                      {city && state && zipcode && (
                        <Box
                          as="span"
                          display="block"
                          textTransform="uppercase"
                        >
                          {city}, {state} {zipcode}
                        </Box>
                      )}
                      <ButtonGroup mt={3} spacing={4}>
                        <Button
                          color="white"
                          textTransform="uppercase"
                          textShadow="1px 1px 0 rgba(0,0,0,0.4)"
                          bg="primary.1"
                          borderRadius={0}
                        >
                          <Link href={`/resort/${slug}`}>View Resort</Link>
                        </Button>
                        {campspotSlug && (
                          <Button
                            color="white"
                            textTransform="uppercase"
                            textShadow="1px 1px 0 rgba(0,0,0,0.4)"
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
