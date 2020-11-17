import React from "react"
import { Box } from "@chakra-ui/react"

const Container = ({ maxW = "1500px", children }) => {
  return (
    <Box w="full" maxW={maxW} mx="auto" px={4}>
      {children}
    </Box>
  )
}

export default Container
