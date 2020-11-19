import React from "react"
import { Box } from "@chakra-ui/react"

import Container from "./Container"

const GuestSpecials = ({ content }) => {
  return (
    <Box as="section" py={16}>
      <Container>
        <Box textAlign="center">
          <Box
            className="cms-content"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default GuestSpecials
