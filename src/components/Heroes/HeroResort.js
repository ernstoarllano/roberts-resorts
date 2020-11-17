import React from "react"
import { useMediaQuery } from "react-responsive"
import { Box, Heading, Flex } from "@chakra-ui/react"

import Container from "../Container"
import BookResort from "../Forms/BookResort"

const HeroResort = ({ resort }) => {
  const isDesktop = useMediaQuery({ query: "(min-device-width: 1024px)" })

  return (
    <>
      {resort.heroMeta.heroImage && (
        <Box
          as="section"
          position="relative"
          py={[16, 16, 16, 56]}
          bg={`url(${
            isDesktop
              ? resort.heroMeta.heroImage.imageFile.childImageSharp.desktop.src
              : resort.heroMeta.heroImage.imageFile.childImageSharp.mobile.src
          })`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Container maxW="980px">
            <Heading
              as="h1"
              fontSize={["50px", "50px", "50px", "60px"]}
              color="white"
              textAlign="center"
              textShadow="2px 2px 0 rgba(0,0,0,0.4)"
            >
              {resort.name}
            </Heading>
            <Flex
              direction={["column", "column", "column", "row"]}
              alignItems="center"
              justifyContent={["", "", "", "center"]}
              mt={4}
              color="white"
            >
              {resort.communityParentMeta.frontDesk && (
                <Box as="span" textTransform="uppercase">
                  <Box as="span" fontWeight="900">
                    {resort.communityParentMeta.frontDesk}
                  </Box>{" "}
                  Front Desk
                </Box>
              )}
              {resort.communityParentMeta.homeRentals && (
                <Box as="span" mx={[0, 0, 0, 5]} textTransform="uppercase">
                  <Box as="span" fontWeight="900">
                    {resort.communityParentMeta.homeRentals}
                  </Box>{" "}
                  Home Sales
                </Box>
              )}
              {resort.communityParentMeta.homeSales && (
                <Box as="span" textTransform="uppercase">
                  <Box as="span" fontWeight="900">
                    {resort.communityParentMeta.homeSales}
                  </Box>{" "}
                  Home Rentals
                </Box>
              )}
            </Flex>
          </Container>
          {isDesktop && (
            <BookResort slug={resort.communityParentMeta.campspotSlug} />
          )}
        </Box>
      )}
    </>
  )
}

export default HeroResort
