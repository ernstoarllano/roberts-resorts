import React from "react"
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react"

import Container from "../Container"

const BookResort = ({ slug }) => {
  const onSubmit = e => {
    e.preventDefault()

    const checkIn = e.target["checkIn"].value
    const checkOut = e.target["checkOut"].value
    const adults = e.target["adults"].value

    window.open(
      `https://www.campspot.com/book/${slug}/search/${checkIn}/${checkOut}/guests${adults},0,0`
    )
  }

  return (
    <Box
      as="form"
      position={["relative", "relative", "relative", "absolute"]}
      bottom={0}
      left={0}
      right={0}
      py={6}
      bg="rgba(35,47,64,0.75)"
      onSubmit={onSubmit}
    >
      <Container maxW="1200px">
        <Flex
          direction={["column", "column", "column", "row"]}
          wrap={["wrap", "wrap", "wrap", "nowrap"]}
          alignItems={["", "", "", "flex-end"]}
          justifyContent={["", "", "", "center"]}
        >
          <Heading as="h6" fontSize="21px" color="white">
            Book Your Site:
          </Heading>
          <FormControl
            maxW={["full", "full", "full", "200px"]}
            ml={[0, 0, 0, 3]}
          >
            <FormLabel
              mb={0}
              fontWeight="600"
              color="white"
              textTransform="uppercase"
              textShadow="2px 2px 0 rgba(0,0,0,0.4)"
            >
              Check-In
            </FormLabel>
            <Input type="date" name="checkIn" bg="white" borderRadius={0} />
          </FormControl>
          <FormControl
            maxW={["full", "full", "full", "200px"]}
            mx={[0, 0, 0, 3]}
          >
            <FormLabel
              mb={0}
              fontWeight="600"
              color="white"
              textTransform="uppercase"
              textShadow="2px 2px 0 rgba(0,0,0,0.4)"
            >
              Check-Out
            </FormLabel>
            <Input type="date" name="checkOut" bg="white" borderRadius={0} />
          </FormControl>
          <FormControl
            maxW={["full", "full", "full", "200px"]}
            mr={[0, 0, 0, 3]}
          >
            <FormLabel
              mb={0}
              fontWeight="600"
              color="white"
              textTransform="uppercase"
              textShadow="2px 2px 0 rgba(0,0,0,0.4)"
            >
              Adults
            </FormLabel>
            <Select
              placeholder="Please Select"
              name="adults"
              bg="white"
              borderRadius={0}
            >
              <option value="2">2</option>
            </Select>
          </FormControl>
          <Button
            type="submit"
            mt={[5, 5, 5, 0]}
            fontWeight="600"
            color="white"
            textTransform="uppercase"
            textShadow="1px 1px 0 rgba(0,0,0,0.4)"
            bg="primary.2"
            borderRadius={0}
          >
            Reserve Now
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default BookResort
