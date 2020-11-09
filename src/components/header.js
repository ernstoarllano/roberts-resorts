import React from "react"
import { Box, Flex } from "@chakra-ui/core"

const Header = () => {
  return (
    <Box as="header">
      <Flex
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
      ></Flex>
    </Box>
  )
}

export default Header
