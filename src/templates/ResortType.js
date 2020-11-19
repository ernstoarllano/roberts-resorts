import React from "react"
import { graphql } from "gatsby"

import Header from "../components/Header"
import HeroResort from "../components/Heroes/HeroResort"
import CommunitiesGrid from "../components/Grids/CommunitiesGrid"
import Footer from "../components/Footer"

const Resort = ({
  data: {
    wpgraphql: { communities, communityParent },
  },
  pageContext: { resortSlug, resortTypeSlug },
}) => {
  return (
    <>
      <Header />
      <HeroResort resort={communityParent} />
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

export default Resort
