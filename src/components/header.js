import React from "react"
import { Box, Link, Flex } from "@chakra-ui/react"

import Container from "./Container"
import Logo from "./Icons/Logo"
import Nav from "./Nav"

const Header = () => {
  return (
    <Box as="header">
      <Box py={2} bg="primary.1">
        <Container>
          <Flex justifyContent="flex-end">
            <Link href="#" color="white">
              Find a Resort
            </Link>
            <Link href="#" ml={4} color="white">
              The Roberts Difference
            </Link>
          </Flex>
        </Container>
      </Box>
      <Box py={4} bg="white">
        <Container>
          <Flex
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <Logo />
            <Nav />
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Header
