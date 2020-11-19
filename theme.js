import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: "Metropolis,sans-serif",
    heading: "Metropolis,sans-serif",
  },
  colors: {
    primary: {
      1: "#232f40",
      2: "#fe9c02",
      3: "#496387",
      4: "#355563",
    },
  },
  styles: {
    global: {
      body: {
        color: "#355563",
      },
      h1: {
        fontSize: 45,
        fontWeight: 800,
        color: "#232F40",
        textTransform: "uppercase",
      },
      h2: {
        fontSize: 40,
        fontWeight: 800,
        color: "#232F40",
        textTransform: "uppercase",
      },
      h3: {
        fontSize: 35,
        fontWeight: 800,
        color: "#232F40",
      },
      h4: {
        fontSize: 30,
        fontWeight: 800,
        color: "#232F40",
      },
      h5: {
        fontSize: 25,
        fontWeight: 800,
        color: "#232F40",
      },
      h6: {
        fontSize: 21,
        fontWeight: 800,
        color: "#496387",
        textTransform: "uppercase",
      },
      p: {
        fontSize: 21,
      },
      a: {
        _hover: {
          textDecoration: "none !important",
        },
      },
    },
  },
})

export default theme
