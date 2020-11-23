import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react"

import Container from "../Container"

const StatusFilter = ({ resort, resortType, status }) => {
  const types = useStaticQuery(graphql`
    query GetStatusTypes {
      wpgraphql {
        communityStatuses {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  `)

  const onChange = e => {
    const { value } = e.target

    window.location.replace(`/resort/${resort}/${resortType}/${value}`)
  }

  return (
    <>
      {types.wpgraphql.communityStatuses && (
        <Container>
          <Flex
            direction={["column", "column", "column", "row"]}
            alignItems={["center", "center", "center", ""]}
            justifyContent={["", "", "", "flex-end"]}
          >
            <FormControl maxW="218px" mb={2}>
              <FormLabel
                mb={0}
                fontWeight="600"
                color="primary.1"
                textTransform="uppercase"
              >
                Filter by Type
              </FormLabel>
              <Select
                placeholder="Select Type"
                name="status"
                bg="white"
                borderRadius={0}
                isRequired={true}
                onChange={onChange}
              >
                {types.wpgraphql.communityStatuses.edges.map(type => {
                  const { name, slug } = type.node

                  return (
                    <option
                      key={slug}
                      value={slug}
                      selected={status && status === slug}
                    >
                      {name}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
          </Flex>
        </Container>
      )}
    </>
  )
}

export default StatusFilter
