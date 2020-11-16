import React from "react"
import { useMediaQuery } from "react-responsive"
import { Box } from "@chakra-ui/react"

const Hero = ({ mobile, desktop, content }) => {
  const isDesktop = useMediaQuery({ query: "(min-device-width: 1024px)" })
  const bgImage = isDesktop ? desktop : mobile

  return (
    <Box
      as="section"
      py={56}
      bg={`url(${bgImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box textAlign="center">
        <Box
          className="cms-content hero-content"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Box>
    </Box>
  )
}

export default Hero
