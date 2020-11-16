import React from "react"
import { Box, Flex } from "@chakra-ui/core"

import Container from "./Container"
import LogoAlt from "./Icons/LogoAlt"

const Footer = () => {
  return (
    <Box as="footer" py={6} bg="primary.1">
      <Container>
        <Flex
          flexDirection="row"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <LogoAlt />
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
