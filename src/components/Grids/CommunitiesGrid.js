import React from "react"
import { Box, Grid, Heading, Button, Link } from "@chakra-ui/react"
import Img from "gatsby-image"

import Container from "../Container"

const CommunitiesGrid = ({ types, resortSlug, typeSlug }) => {
  return (
    <Box as="section" py={16}>
      <Container>
        <Grid
          gridTemplateColumns={["", "", "", "repeat(3,1fr)"]}
          gap={[0, 0, 0, 2]}
        >
          {types.edges.map(type => {
            const { title, slug } = type.node

            return (
              <Box key={slug} bg="white" boxShadow="md">
                {type.node.featuredImage && (
                  <Img
                    fluid={
                      type.node.featuredImage.imageFile.childImageSharp.fluid
                    }
                  />
                )}
                <Box position="relative" px={5} pt={8} pb={10}>
                  <Heading as="h4">{title}</Heading>
                  <Button
                    color="white"
                    textTransform="uppercase"
                    textShadow="1px 1px 0 rgba(0,0,0,0.4)"
                    bg="primary.2"
                    borderRadius={0}
                  >
                    <Link href={`/resort/${resortSlug}/${typeSlug}/${slug}`}>
                      View Listing
                    </Link>
                  </Button>
                </Box>
              </Box>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default CommunitiesGrid
