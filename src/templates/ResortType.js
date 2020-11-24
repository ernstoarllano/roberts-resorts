import React from "react"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/react"

import Seo from "../components/Seo"
import Header from "../components/Header"
import HeroResort from "../components/Heroes/HeroResort"
import Container from "../components/Container"
import StatusFilter from "../components/Forms/StatusFilter"
import CommunitiesGrid from "../components/Grids/CommunitiesGrid"
import Footer from "../components/Footer"

const Resort = ({
  data: {
    wpgraphql: { communities, communityParent },
  },
  pageContext: { resortSlug, resortTypeSlug },
}) => {
  let content

  switch (resortTypeSlug) {
    case "homes-for-sale":
      content = communityParent.communityParentMeta.homesForSaleContent
      break
    case "rv-lots-for-sale":
      content = communityParent.communityParentMeta.rvLotsForSaleContent
      break
    case "vacation-rentals":
      content = communityParent.communityParentMeta.vacationRentalsContent
      break
    default:
      content = null
      break
  }

  return (
    <>
      <Seo />
      <Header />
      <HeroResort resort={communityParent} />
      {content && (
        <Box as="section" pt={16} pb={8}>
          <Container>
            <Box textAlign="center">
              <Box
                className="cms-content"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            </Box>
          </Container>
        </Box>
      )}
      <StatusFilter resort={resortSlug} resortType={resortTypeSlug} />
      <CommunitiesGrid
        types={communities}
        resortSlug={resortSlug}
        typeSlug={resortTypeSlug}
      />
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetResortType(
    $id: ID!
    $resortSlug: [String!]!
    $resortTypeSlug: [String!]!
  ) {
    wpgraphql {
      communities(
        where: {
          taxQuery: {
            relation: AND
            taxArray: [
              {
                terms: $resortSlug
                operator: IN
                field: SLUG
                taxonomy: COMMUNITYPARENT
              }
              {
                terms: $resortTypeSlug
                operator: IN
                field: SLUG
                taxonomy: COMMUNITYTYPE
              }
            ]
          }
        }
      ) {
        edges {
          node {
            databaseId
            slug
            title
            communityMeta {
              address
              agent
              bathrooms
              bedrooms
              lotNumber
              price
              squareFootage
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
      communityParent(id: $id, idType: DATABASE_ID) {
        name
        slug
        communityParentMeta {
          frontDesk
          homeRentals
          homeSales
          campspotSlug
          homesForSaleContent
          rvLotsForSaleContent
          vacationRentalsContent
        }
        heroMeta {
          heroImage {
            guid
            imageFile {
              childImageSharp {
                mobile: fixed(width: 960, height: 825, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
                desktop: fixed(width: 1920, height: 825, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Resort
