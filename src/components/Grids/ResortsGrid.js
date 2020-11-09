import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Grid, Box, Heading, ButtonGroup, Button, Flex } from "@chakra-ui/core"

const ResortsGrid = () => {
  const resorts = useStaticQuery(graphql`
    query GetCommunities {
      wpgraphql {
        page(id: "cGFnZToyMA==") {
          title
          content
        }
        communities(first: 8) {
          edges {
            node {
              id
              slug
              title
              city: terms(taxonomies: COMMUNITYCITY) {
                ... on WPGraphQL_CommunityCity {
                  name
                }
              }
              state: terms(taxonomies: COMMUNITYSTATE) {
                ... on WPGraphQL_CommunityState {
                  name
                }
              }
              type: terms(taxonomies: COMMUNITYTYPE) {
                ... on WPGraphQL_CommunityType {
                  name
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
      {resorts.wpgraphql.communities && (
        <Box as="section" py={16} bg="gray.100">
          <Box textAlign="center">
            <div
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
              const { id, title, city, state, type, slug } = resort.node

              return (
                <Box key={id} bg="white" boxShadow="lg">
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
                      {type[0].name}
                    </Box>
                    <Heading as="h4">{title}</Heading>
                    <Box as="span">
                      {city[0].name}, {state[0].name}
                    </Box>
                    <ButtonGroup mt={3} spacing={4}>
                      <Button
                        color="white"
                        textTransform="uppercase"
                        bg="primary.1"
                        borderRadius={0}
                      >
                        <Link to={`/resort/${slug}`}>View Resort</Link>
                      </Button>
                      <Button
                        color="white"
                        textTransform="uppercase"
                        bg="primary.2"
                        borderRadius={0}
                      >
                        Book Now
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Box>
              )
            })}
          </Grid>
          <Flex justifyContent="center">
            <Link to="/">View All</Link>
          </Flex>
        </Box>
      )}
    </>
  )
}

export default ResortsGrid
