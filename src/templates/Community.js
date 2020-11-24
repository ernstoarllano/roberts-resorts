import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Flex, Grid, List, ListItem } from "@chakra-ui/react"

import Seo from "../components/Seo"
import Header from "../components/Header"
import Container from "../components/Container"
import RelatedCommunities from "../components/Grids/RelatedCommunities"
import Footer from "../components/Footer"

const Community = ({
  data: {
    wpgraphql: { community, communities },
  },
  pageContext: { resortSlug, resortTypeSlug },
}) => {
  return (
    <>
      <Seo />
      <Header />
      <Box as="section" py={16}>
        <Container>
          <Heading textAlign="center">{community.title}</Heading>
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            textTransform="uppercase"
          >
            {community.communityMeta.price && (
              <Box as="span">${community.communityMeta.price}</Box>
            )}
            {community.communityMeta.bedrooms &&
              community.communityMeta.bathrooms && (
                <Box as="span" mx={3}>
                  |
                  <Box as="span" pl={3}>
                    {community.communityMeta.bedrooms} BR
                  </Box>
                  <Box as="span" mx={1}>
                    /
                  </Box>
                  <Box as="span" pr={3}>
                    {community.communityMeta.bathrooms} BA
                  </Box>
                  |
                </Box>
              )}
            {community.communityMeta.lotNumber && (
              <Box as="span">Lot #{community.communityMeta.lotNumber}</Box>
            )}
          </Flex>
          <Grid
            templateColumns={["", "", "", "2fr 1fr"]}
            gap={[0, 0, 0, 4]}
            mt={16}
          >
            <Box as="main">
              <List fontSize="21px">
                {community.communityMeta.price && (
                  <ListItem
                    mb={2}
                    pb={2}
                    borderBottomWidth={1}
                    borderStyle="solid"
                    borderColor="primary.7"
                  >
                    <Box as="span" fontWeight="700">
                      Price:
                    </Box>{" "}
                    {community.communityMeta.price}
                  </ListItem>
                )}
                {community.communityParents.edges[0] && (
                  <ListItem
                    mb={2}
                    pb={2}
                    borderBottomWidth={1}
                    borderStyle="solid"
                    borderColor="primary.7"
                  >
                    <Box as="span" fontWeight="700">
                      Community:
                    </Box>{" "}
                    {community.communityParents.edges[0].node.name}
                  </ListItem>
                )}
                {community.communityStatuses.edges[0] && (
                  <ListItem
                    mb={2}
                    pb={2}
                    borderBottomWidth={1}
                    borderStyle="solid"
                    borderColor="primary.7"
                  >
                    <Box as="span" fontWeight="700">
                      Status:
                    </Box>{" "}
                    {community.communityStatuses.edges[0].node.name}
                  </ListItem>
                )}
                {community.communityMeta.bedrooms &&
                  community.communityMeta.bathrooms && (
                    <ListItem
                      mb={2}
                      pb={2}
                      borderBottomWidth={1}
                      borderStyle="solid"
                      borderColor="primary.7"
                    >
                      <Box as="span" fontWeight="700">
                        Bd/Ba:
                      </Box>{" "}
                      {community.communityMeta.bedrooms}/
                      {community.communityMeta.bathrooms}
                    </ListItem>
                  )}
                {community.communityMeta.squareFootage && (
                  <ListItem
                    mb={2}
                    pb={2}
                    borderBottomWidth={1}
                    borderStyle="solid"
                    borderColor="primary.7"
                  >
                    <Box as="span" fontWeight="700">
                      Sq. Ft:
                    </Box>{" "}
                    {community.communityMeta.squareFootage}
                  </ListItem>
                )}
              </List>
              <Box
                className="cms-content"
                dangerouslySetInnerHTML={{
                  __html: community.content,
                }}
              />
            </Box>
            <Box as="aside">
              {community.communityMeta.agent && (
                <>
                  <Box mb={4} p={8} color="white" bg="primary.3">
                    <Heading as="h4" color="currentcolor">
                      {community.communityMeta.agent}
                    </Heading>
                  </Box>
                </>
              )}
            </Box>
          </Grid>
        </Container>
      </Box>
      {communities && (
        <RelatedCommunities
          communities={communities}
          resortSlug={resortSlug}
          typeSlug={resortTypeSlug}
        />
      )}
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetCommunity(
    $id: ID!
    $currentID: [ID!]!
    $resortSlug: [String!]!
    $resortTypeSlug: [String!]!
  ) {
    wpgraphql {
      community(id: $id, idType: DATABASE_ID) {
        content
        slug
        title
        communityMeta {
          price
          bedrooms
          bathrooms
          lotNumber
          agent
          squareFootage
        }
        communityParents {
          edges {
            node {
              name
            }
          }
        }
        communityStatuses {
          edges {
            node {
              name
            }
          }
        }
      }
      communities(
        where: {
          taxQuery: {
            relation: AND
            taxArray: [
              {
                terms: $resortTypeSlug
                operator: IN
                field: SLUG
                taxonomy: COMMUNITYTYPE
              }
              {
                terms: $resortSlug
                operator: IN
                field: SLUG
                taxonomy: COMMUNITYPARENT
              }
            ]
          }
          notIn: $currentID
        }
      ) {
        edges {
          node {
            title
            slug
            communityMeta {
              bathrooms
              bedrooms
              lotNumber
              price
            }
            communityStatuses {
              edges {
                node {
                  name
                }
              }
            }
            featuredImage {
              node {
                guid
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 970, maxHeight: 530, quality: 100) {
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
`

export default Community
