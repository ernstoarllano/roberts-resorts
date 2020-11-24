import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/Seo"
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
        page(id: 20, idType: DATABASE_ID) {
          content
          seo {
            metaDescription
            metaTitle
            openGraphDescription
            openGraphTitle
          }
          homeMeta {
            promotions
          }
          pageMeta {
            introImage {
              guid
              imageFile {
                childImageSharp {
                  introMobile: fixed(width: 960, height: 663, quality: 70) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                  introDesktop: fixed(width: 1920, height: 663, quality: 90) {
                    ...GatsbyImageSharpFixed_withWebp
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
                  mobile: fixed(width: 960, height: 825, quality: 70) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                  desktop: fixed(width: 1920, height: 825, quality: 90) {
                    ...GatsbyImageSharpFixed_withWebp
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
      <Seo
        title={home.wpgraphql.page.seo.metaTitle}
        description={home.wpgraphql.page.seo.metaDescription}
        openGraphTitle={home.wpgraphql.page.seo.openGraphTitle}
        openGraphDescription={home.wpgraphql.page.seo.openGraphDescription}
      />
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
