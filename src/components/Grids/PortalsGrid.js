import React from "react"

import { Box, Grid, Flex, Heading, Button } from "@chakra-ui/core"

const PortalsGrid = () => {
  return (
    <Box as="section" py={16}>
      <Grid
        gridTemplateColumns={["", "", "", "repeat(3,1fr)"]}
        gap={[0, 0, 0, 2]}
      >
        <Flex
          flexDirection="column"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h4">Vacation Rentals</Heading>
          <Button
            mt={4}
            color="white"
            textTransform="uppercase"
            bg="primary.2"
            borderRadius={0}
          >
            More Info
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h4">Homes for Sale</Heading>
          <Button
            mt={4}
            color="white"
            textTransform="uppercase"
            bg="primary.2"
            borderRadius={0}
          >
            Home Listings
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h4">RV Lots for Sale</Heading>
          <Button
            mt={4}
            color="white"
            textTransform="uppercase"
            bg="primary.2"
            borderRadius={0}
          >
            Lot Listings
          </Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default PortalsGrid
