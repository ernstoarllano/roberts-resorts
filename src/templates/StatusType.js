import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
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
      <Seo />
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

export default StatusType
