import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Seo = ({ title, description, openGraphTitle, openGraphDescription }) => {
  const data = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const seo = {
    title: title
      ? `${data.site.siteMetadata.title} | ${title}`
      : data.site.siteMetadata.title,
    description: description || data.site.siteMetadata.description,
    openGraphTitle: openGraphTitle,
    openGraphDescription: openGraphDescription,
  }

  return (
    <Helmet title={seo.title}>
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.openGraphTitle && (
        <meta property="og:title" content={seo.openGraphTitle} />
      )}
      {seo.openGraphDescription && (
        <meta property="og:description" content={seo.openGraphDescription} />
      )}
    </Helmet>
  )
}

export default Seo
