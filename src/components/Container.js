import React from "react"
import { Box } from "@chakra-ui/core"

const Container = ({ children }) => {
  return (
    <Box w="full" maxW="1500px" mx="auto" px={4}>
      {children}
    </Box>
  )
}

export default Container
