import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Container from "../components/Container"
import Footer from "../components/Footer"

const Resort = ({
  data: {
    wpgraphql: { community },
  },
}) => {
  const { heroContent } = community.heroMeta

  const {
    mobile,
    desktop,
  } = community.heroMeta.heroImage.imageFile.childImageSharp

  return (
    <>
      <Header />
      <Hero mobile={mobile.src} desktop={desktop.src} content={heroContent} />
      <Box as="main">
        <Container>
          <Box as="section">
            <Heading as="h1">{community.title}</Heading>
          </Box>
          <Box as="section"></Box>
          <Box as="aside"></Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetCommunity($id: ID!) {
    wpgraphql {
      community(id: $id) {
        content
        id
        slug
        title
        heroMeta {
          heroContent
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
