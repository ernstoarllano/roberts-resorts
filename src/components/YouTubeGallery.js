import React from "react"
import { Box, Heading } from "@chakra-ui/react"

import Container from "./Container"

const YouTubeGallery = () => {
  return (
    <Box as="section" py={16}>
      <Container>
        <Box textAlign="center">
          <Heading as="h1">Check Out Our YouTube Channel</Heading>
        </Box>
      </Container>
    </Box>
  )
}

export default YouTubeGallery
