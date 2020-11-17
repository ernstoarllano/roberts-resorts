import React from "react"
import { useMediaQuery } from "react-responsive"
import { Box, Button } from "@chakra-ui/react"

import Container from "./Container"

const Intro = ({ content, image }) => {
  const isDesktop = useMediaQuery({ query: "(min-device-width: 1024px)" })
  const bgImage = isDesktop ? image.introDesktop.src : image.introMobile.src

  return (
    <Box
      as="section"
      pt={16}
      pb={[16, 16, 16, 64]}
      bg="white"
      bg={`url(${bgImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Container>
        <Box textAlign="center">
          <Box
            className="cms-content"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <Button
            mt={5}
            color="white"
            textTransform="uppercase"
            textShadow="1px 1px 0 rgba(0,0,0,0.4)"
            bg="primary.2"
            borderRadius={0}
          >
            The Roberts Difference
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Intro
