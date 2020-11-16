/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import "fontsource-metropolis"

import theme from "./theme"
import "./style.css"

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>{element}</ChakraProvider>
)
