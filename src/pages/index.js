import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import Hero from "../components/Hero"
import ResortsGrid from "../components/Grids/ResortsGrid"
import PortalsGrid from "../components/Grids/PortalsGrid"
import ResortsMap from "../components/Maps/ResortsMap"
import Footer from "../components/Footer"

const IndexPage = () => {
  const resorts = useStaticQuery(graphql`
    query GetCommunities {
      wpgraphql {
        page(id: "cGFnZToyMA==") {
          title
          content
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
        communities(first: 8) {
          edges {
            node {
              id
              slug
              title
              communityMeta {
                campspotSlug
              }
              featuredImage {
                guid
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 732, maxHeight: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                      ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                  }
                }
              }
              age: terms(taxonomies: COMMUNITYAGE) {
                ... on WPGraphQL_CommunityAge {
                  name
                  slug
                }
              }
              city: terms(taxonomies: COMMUNITYCITY) {
                ... on WPGraphQL_CommunityCity {
                  name
                }
              }
              state: terms(taxonomies: COMMUNITYSTATE) {
                ... on WPGraphQL_CommunityState {
                  name
                }
              }
              type: terms(taxonomies: COMMUNITYTYPE) {
                ... on WPGraphQL_CommunityType {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `)

  const { heroContent } = resorts.wpgraphql.page.heroMeta

  const {
    mobile,
    desktop,
  } = resorts.wpgraphql.page.heroMeta.heroImage.imageFile.childImageSharp

  return (
    <>
      <Header />
      <Hero mobile={mobile.src} desktop={desktop.src} content={heroContent} />
      <ResortsGrid resorts={resorts} />
      <PortalsGrid />
      <ResortsMap />
      <Footer />
    </>
  )
}

export default IndexPage
