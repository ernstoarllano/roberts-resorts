import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"

import Header from "../components/Header"

const Resort = ({
  data: {
    wpgraphql: { community },
  },
}) => {
  return (
    <>
      <Header />
      <Box as="main">
        <Box as="section">
          <Heading as="h1">{community.title}</Heading>
        </Box>
        <Box as="section"></Box>
        <Box as="aside"></Box>
      </Box>
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
      }
    }
  }
`

export default Resort
