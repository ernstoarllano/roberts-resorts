import { extendTheme } from "@chakra-ui/core"

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
      h1: {
        fontSize: 45,
        fontWeight: 800,
      },
      h2: {
        fontSize: 40,
        fontWeight: 800,
      },
      h3: {
        fontSize: 35,
        fontWeight: 800,
      },
      h4: {
        fontSize: 30,
        fontWeight: 800,
      },
      h5: {
        fontSize: 25,
        fontWeight: 800,
      },
      h6: {
        fontSize: 21,
        fontWeight: 800,
      },
      p: {
        fontSize: 21,
      },
    },
  },
})

export default theme
