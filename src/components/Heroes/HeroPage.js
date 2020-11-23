import React from "react"
import { Box } from "@chakra-ui/react"

import Container from "../Container"
import BookResorts from "../Forms/BookResorts"

const HeroPage = ({ mobile, desktop, content }) => {
  return (
    <Box
      as="section"
      py={[16, 16, 16, 56]}
      bgImage={[
        `url(${mobile})`,
        `url(${mobile})`,
        `url(${mobile})`,
        `url(${desktop})`,
      ]}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Container>
        <Box textAlign="center">
          <Box
            className="cms-content hero-content"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </Box>
      </Container>
      <BookResorts />
    </Box>
  )
}

export default HeroPage
