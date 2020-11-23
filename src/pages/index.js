import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import HeroPage from "../components/Heroes/HeroPage"
import Intro from "../components/Intro"
import ResortsGrid from "../components/Grids/ResortsGrid"
import PortalsGrid from "../components/Grids/PortalsGrid"
import YouTubeGallery from "../components/YouTubeGallery"
import Promotions from "../components/Promotions"
import ResortsMap from "../components/Maps/ResortsMap"
import Footer from "../components/Footer"

const IndexPage = () => {
  const home = useStaticQuery(graphql`
    query GetHome {
      wpgraphql {
        page(id: "cGFnZToyMA==") {
          content
          homeMeta {
            promotions
          }
          pageMeta {
            introImage {
              guid
              imageFile {
                childImageSharp {
                  introMobile: fixed(width: 960, height: 663, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                  introDesktop: fixed(width: 1920, height: 663, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          heroMeta {
            heroContent
            heroImage {
              guid
              imageFile {
                childImageSharp {
                  mobile: fixed(width: 960, height: 825, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                  desktop: fixed(width: 1920, height: 825, quality: 100) {
                    ...GatsbyImageSharpFixed
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
      <Intro
        content={home.wpgraphql.page.content}
        image={
          home.wpgraphql.page.pageMeta.introImage.imageFile.childImageSharp
        }
      />
      <ResortsGrid />
      <PortalsGrid />
      <YouTubeGallery />
      <Promotions content={home.wpgraphql.page.homeMeta.promotions} />
      <ResortsMap />
      <Footer />
    </>
  )
}

export default IndexPage
