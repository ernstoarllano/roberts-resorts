import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react"

const BookNavResort = () => {
  const [button, setButton] = useState({
    type: "reserve",
  })

  const resorts = useStaticQuery(graphql`
    query GetBookingNavResorts {
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

    if (button.type === "explore") {
      const resortSlug =
        e.target["resort"].options[e.target["resort"].selectedIndex].dataset
          .slug

      window.location.replace(`/resort/${resortSlug}`)
    } else {
    }
  }

  const onClick = e => {
    setButton({ ...button, type: e.target.name })
  }

  return (
    <Box as="form" onSubmit={onSubmit}>
      <Flex
        direction={["column", "column", "column", "row"]}
        wrap={["wrap", "wrap", "wrap", "nowrap"]}
        alignItems={["", "", "", "flex-end"]}
        justifyContent={["", "", "", "space-between"]}
      >
        {resorts.wpgraphql.communityParents && (
          <FormControl maxW={["full", "full", "full", "200px"]}>
            <FormLabel
              mb={0}
              fontWeight="600"
              color="white"
              textTransform="uppercase"
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
        <FormControl maxW={["full", "full", "full", "200px"]} mx={[0, 0, 0, 3]}>
          <FormLabel
            mb={0}
            fontWeight="600"
            color="white"
            textTransform="uppercase"
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
          mr={[0, 0, 0, 3]}
          textTransform="uppercase"
        >
          <FormLabel mb={0} fontWeight="600" color="white">
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
        <Button
          type="submit"
          minW="auto"
          fontWeight="600"
          color="white"
          textTransform="uppercase"
          bg="primary.3"
          borderRadius={0}
          name="explore"
          onClick={onClick}
        >
          View Resort
        </Button>
        <Button
          type="submit"
          minW="auto"
          ml={3}
          fontWeight="600"
          color="white"
          textTransform="uppercase"
          bg="primary.3"
          borderRadius={0}
          name="reserve"
          onClick={onClick}
        >
          Check Availability
        </Button>
      </Flex>
    </Box>
  )
}

export default BookNavResort
