import React from "react"
import { graphql } from "gatsby"
import { Box, Link } from "@chakra-ui/react"

import Seo from "../components/Seo"
import Header from "../components/Header"
import HeroResort from "../components/Heroes/HeroResort"
import Container from "../components/Container"
import ResortTypesGrid from "../components/Grids/ResortTypesGrid"
import GuestSpecials from "../components/GuestSpecials"
import Footer from "../components/Footer"

const Resort = ({
  data: {
    wpgraphql: { communityParent, communityTypes },
  },
}) => {
  return (
    <>
      <Seo />
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
      {communityParent.communityParentMeta.guestSpecials && (
        <GuestSpecials
          content={communityParent.communityParentMeta.guestSpecials}
        />
      )}
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
          guestSpecials
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
    }
  }
`

export default Resort
