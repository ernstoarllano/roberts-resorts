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
      5: "#ff7c1d",
      6: "#d0d0d0",
      7: "#d8d8d8",
    },
  },
  styles: {
    global: {
      body: {
        color: "#355563",
      },
      h1: {
        fontSize: "45px",
        fontWeight: "800 !important",
        letterSpacing: 4,
        color: "#232F40",
        textTransform: "uppercase",
      },
      h2: {
        fontSize: "40px !important",
        fontWeight: "800 !important",
        lineHeight: "48px !important",
        letterSpacing: 3,
        color: "#232F40",
        textTransform: "uppercase",
      },
      h3: {
        fontSize: "35px !important",
        fontWeight: "800 !important",
        lineHeight: "42px !important",
        letterSpacing: 1,
        color: "#232F40",
      },
      h4: {
        fontSize: "30px !important",
        fontWeight: "800 !important",
        lineHeight: "36px !important",
        letterSpacing: 0.5,
        color: "#232F40",
      },
      h5: {
        fontSize: "25px !important",
        fontWeight: "800 !important",
        lineHeight: "30px !important",
        letterSpacing: 0.5,
        color: "#232F40",
      },
      h6: {
        fontSize: "21px !important",
        fontWeight: "800 !important",
        lineHeight: "25px !important",
        letterSpacing: 0.5,
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
