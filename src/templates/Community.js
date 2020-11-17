import React from "react"
import { graphql } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Community = ({
  data: {
    wpgraphql: { community },
  },
}) => {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetCommunity($id: ID!) {
    wpgraphql {
      community(id: $id, idType: DATABASE_ID) {
        slug
        title
      }
    }
  }
`

export default Community
