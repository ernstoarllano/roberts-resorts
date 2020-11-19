import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Flex, Grid } from "@chakra-ui/react"

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
            <Box as="main"></Box>
            <Box as="aside">
              {community.communityMeta.agent && (
                <>
                  <Box mb={4} p={8} color="white" bg="primary.3">
                    <Heading as="h4" color="currentcolor">
                      {community.communityMeta.agent}
                    </Heading>
                  </Box>
                  <Box p={8} bg="primary.1"></Box>
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
        slug
        title
        communityMeta {
          price
          bedrooms
          bathrooms
          lotNumber
          agent
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
