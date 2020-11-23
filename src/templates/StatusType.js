import React from "react"
import { graphql } from "gatsby"

import Header from "../components/Header"
import HeroResort from "../components/Heroes/HeroResort"
import StatusFilter from "../components/Forms/StatusFilter"
import CommunitiesGrid from "../components/Grids/CommunitiesGrid"
import Footer from "../components/Footer"

const StatusType = ({
  data: {
    wpgraphql: { communities, communityParent },
  },
  pageContext: { resortSlug, resortTypeSlug, statusTypeSlug },
}) => {
  return (
    <>
      <Header />
      <HeroResort resort={communityParent} />
      <StatusFilter
        resort={resortSlug}
        resortType={resortTypeSlug}
        status={statusTypeSlug}
      />
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
  query GetResortStatus(
    $id: ID!
    $resortSlug: [String!]!
    $resortTypeSlug: [String!]!
    $statusTypeSlug: [String!]!
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
              {
                terms: $statusTypeSlug
                operator: IN
                field: SLUG
                taxonomy: COMMUNITYSTATUS
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
      communityParent(id: $id, idType: DATABASE_ID) {
        name
        slug
        communityParentMeta {
          frontDesk
          homeRentals
          homeSales
          campspotSlug
        }
        heroMeta {
          heroImage {
            guid
            imageFile {
              childImageSharp {
                mobile: fluid(maxWidth: 960, maxHeight: 825, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
                desktop: fluid(maxWidth: 1920, maxHeight: 825, quality: 100) {
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
`

export default StatusType
