import React from "react"
import { useMediaQuery } from "react-responsive"
import { Box } from "@chakra-ui/react"

import Container from "../Container"
import BookResorts from "../Forms/BookResorts"

const HeroPage = ({ mobile, desktop, content }) => {
  const isDesktop = useMediaQuery({ query: "(min-device-width: 1024px)" })
  const bgImage = isDesktop ? desktop : mobile

  return (
    <Box
      as="section"
      py={[16, 16, 16, 56]}
      bg={`url(${bgImage})`}
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
