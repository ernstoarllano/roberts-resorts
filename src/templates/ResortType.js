import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Grid, ButtonGroup, Button, Link } from "@chakra-ui/react"

import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"

const ResortType = ({
  data: {
    wpgraphql: { communityType },
  },
}) => {
  return (
    <>
      <Header />
      <Box as="main">
        <Container>
          <Box as="section">
            <Heading as="h1">{communityType.name}</Heading>
            {communityType.communities.edges && (
              <Grid
                templateColumns={["", "", "", "repeat(4,1fr)"]}
                gap={[0, 0, 0, 4]}
                mt={14}
                mb={16}
              >
                {communityType.communities.edges.map(resort => {
                  const {
                    id,
                    title,
                    communityMeta: { campspotSlug },
                    age,
                    city,
                    state,
                    slug,
                  } = resort.node

                  return (
                    <Box key={id} bg="white" boxShadow="md">
                      <Box></Box>
                      <Box px={5} py={10}>
                        <Box
                          as="span"
                          px={8}
                          py={2}
                          color="white"
                          textTransform="uppercase"
                          bg="primary.3"
                        >
                          {age[0].name}
                        </Box>
                        <Heading as="h4">{title}</Heading>
                        <Box as="span" display="block">
                          {city[0].name}, {state[0].name}
                        </Box>
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
            )}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetCommunityType($id: ID!) {
    wpgraphql {
      communityType(id: $id) {
        id
        name
        communities(first: 21) {
          edges {
            node {
              id
              slug
              title
              communityMeta {
                campspotSlug
              }
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
              city: terms {
                ... on WPGraphQL_CommunityCity {
                  name
                }
              }
              state: terms {
                ... on WPGraphQL_CommunityState {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ResortType
