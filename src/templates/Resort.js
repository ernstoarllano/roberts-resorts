import React from "react"
import { graphql } from "gatsby"
import { Box, Link } from "@chakra-ui/react"

import Header from "../components/Header"
import HeroResort from "../components/Heroes/HeroResort"
import Container from "../components/Container"
import ResortTypesGrid from "../components/Grids/ResortTypesGrid"
import Footer from "../components/Footer"

const Resort = ({
  data: {
    wpgraphql: { communityParent, communityTypes },
  },
}) => {
  console.log(communityParent)

  return (
    <>
      <Header />
      <HeroResort resort={communityParent} />
      {communityParent.communityParentMeta.intro && (
        <Box as="section" py={16} bg="white">
          <Container>
            <Box textAlign="center">
              <Box
                className="cms-content"
                dangerouslySetInnerHTML={{
                  __html: communityParent.communityParentMeta.intro,
                }}
                mb={8}
              />
              <Link to="/" fontWeight="600" textTransform="uppercase">
                The Experience{" "}
                <Box as="span" color="primary.2">
                  &rsaquo;
                </Box>
              </Link>
            </Box>
          </Container>
        </Box>
      )}
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
          intro
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
