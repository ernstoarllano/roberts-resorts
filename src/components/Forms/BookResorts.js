import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react"

import Container from "../Container"

const BookResorts = () => {
  const [button, setButton] = useState({
    type: "reserve",
  })

  const resorts = useStaticQuery(graphql`
    query GetBookingResorts {
      wpgraphql {
        communityParents {
          edges {
            node {
              name
              slug
              communityParentMeta {
                campspotSlug
              }
            }
          }
        }
      }
    }
  `)

  const onSubmit = e => {
    e.preventDefault()

    const resort = e.target["resort"].value
    const checkIn = e.target["checkIn"].value
    const checkOut = e.target["checkOut"].value
    const adults = e.target["adults"].value

    if (button.type === "reserve") {
      window.open(
        `https://www.campspot.com/book/${resort}/search/${checkIn}/${checkOut}/guests${adults},0,0`
      )
    } else {
      const resortSlug =
        e.target["resort"].options[e.target["resort"].selectedIndex].dataset
          .slug

      window.location.replace(`/resort/${resortSlug}`)
    }
  }

  const onClick = e => {
    setButton({ ...button, type: e.target.name })
  }

  return (
    <Container maxW="1025px">
      <Box as="form" onSubmit={onSubmit}>
        <Flex
          direction={["column", "column", "column", "row"]}
          wrap={["wrap", "wrap", "wrap", "nowrap"]}
          alignItems={["", "", "", "flex-end"]}
          justifyContent={["", "", "", "space-between"]}
          mt={4}
        >
          {resorts.wpgraphql.communityParents && (
            <FormControl maxW={["full", "full", "full", "290px"]} mb={2}>
              <FormLabel
                mb={0}
                fontWeight="600"
                color="white"
                textTransform="uppercase"
                textShadow="2px 2px 0 rgba(0,0,0,0.4)"
              >
                Choose Location
              </FormLabel>
              <Select
                placeholder="Please Select"
                name="resort"
                bg="white"
                borderRadius={0}
                isRequired={true}
              >
                {resorts.wpgraphql.communityParents.edges.map(resort => {
                  const {
                    name,
                    slug,
                    communityParentMeta: { campspotSlug },
                  } = resort.node

                  return (
                    <option key={slug} value={campspotSlug} data-slug={slug}>
                      {name}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
          )}
          <FormControl
            maxW={["full", "full", "full", "200px"]}
            mb={2}
            mx={[0, 0, 0, 3]}
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
            <Input
              type="date"
              name="checkIn"
              bg="white"
              borderRadius={0}
              isRequired={button.type === "reserve" ? true : false}
            />
          </FormControl>
          <FormControl
            maxW={["full", "full", "full", "200px"]}
            mb={2}
            mr={[0, 0, 0, 3]}
            textTransform="uppercase"
          >
            <FormLabel
              mb={0}
              fontWeight="600"
              color="white"
              textShadow="2px 2px 0 rgba(0,0,0,0.4)"
            >
              Check-Out
            </FormLabel>
            <Input
              type="date"
              name="checkOut"
              bg="white"
              borderRadius={0}
              isRequired={button.type === "reserve" ? true : false}
            />
          </FormControl>
          <FormControl maxW={["full", "full", "full", "290px"]} mb={2}>
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
              isRequired={button.type === "reserve" ? true : false}
            >
              <option value="2">2</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex
          direction="row"
          wrap="nowrap"
          alignItems="center"
          justifyContent="center"
          mt={5}
        >
          <Stack direction={["column", "column", "column", "row"]}>
            <Button
              type="submit"
              minW={["full", "full", "full", "270px"]}
              fontWeight="600"
              color="white"
              textTransform="uppercase"
              textShadow="1px 1px 0 rgba(0,0,0,0.4)"
              bg="primary.2"
              borderRadius={0}
              name="explore"
              onClick={onClick}
            >
              Explore Destination
            </Button>
            <Button
              type="submit"
              minW={["", "", "", "270px"]}
              fontWeight="600"
              color="white"
              textTransform="uppercase"
              textShadow="1px 1px 0 rgba(0,0,0,0.4)"
              bg="primary.3"
              borderRadius={0}
              name="reserve"
              onClick={onClick}
            >
              Reserve Now
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Container>
  )
}

export default BookResorts
