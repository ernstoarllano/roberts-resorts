import React from "react"
import { graphql } from "gatsby"

import Header from "../components/Header"
import HeroResort from "../components/Heroes/HeroResort"
import ResortTypesGrid from "../components/Grids/ResortTypesGrid"
import Footer from "../components/Footer"

const Resort = ({
  data: {
    wpgraphql: { communityParent, communityTypes },
  },
}) => {
  return (
    <>
      <Header />
      <HeroResort resort={communityParent} />
      <ResortTypesGrid types={communityTypes} resort={communityParent} />
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetCommunityType($id: ID!) {
    wpgraphql {
      communityParent(id: $id, idType: DATABASE_ID) {
        databaseId
        name
        slug
        communityParentMeta {
          campspotSlug
          frontDesk
          homeRentals
          homeSales
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
      communityTypes {
        edges {
          node {
            name
            slug
            communityTypeMeta {
              typeImage {
                guid
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 636, maxHeight: 550, quality: 100) {
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

export default Resort
