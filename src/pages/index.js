import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import HeroPage from "../components/Heroes/HeroPage"
import Intro from "../components/Intro"
import ResortsGrid from "../components/Grids/ResortsGrid"
import PortalsGrid from "../components/Grids/PortalsGrid"
import ResortsMap from "../components/Maps/ResortsMap"
import Footer from "../components/Footer"

const IndexPage = () => {
  const home = useStaticQuery(graphql`
    query GetHome {
      wpgraphql {
        page(id: "cGFnZToyMA==") {
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
  `)

  const { heroContent } = home.wpgraphql.page.heroMeta

  const {
    mobile,
    desktop,
  } = home.wpgraphql.page.heroMeta.heroImage.imageFile.childImageSharp

  return (
    <>
      <Header />
      <HeroPage
        mobile={mobile.src}
        desktop={desktop.src}
        content={heroContent}
      />
      <Intro />
      <ResortsGrid />
      <PortalsGrid />
      <ResortsMap />
      <Footer />
    </>
  )
}

export default IndexPage
