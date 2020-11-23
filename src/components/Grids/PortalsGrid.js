import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Grid, Flex, Heading, Button, Link } from "@chakra-ui/react"

const PortalsGrid = () => {
  const types = useStaticQuery(graphql`
    query GetCommunityTypes {
      wpgraphql {
        communityTypes {
          edges {
            node {
              communityTypeMeta {
                typeImage {
                  guid
                  imageFile {
                    childImageSharp {
                      fluid(maxWidth: 636, maxHeight: 550, quality: 100) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
              id
              name
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {types.wpgraphql.communityTypes && (
        <Box as="section">
          <Grid gridTemplateColumns={["", "", "", "repeat(3,1fr)"]} gap={1}>
            {types.wpgraphql.communityTypes.edges.map(type => {
              const { communityTypeMeta, id, name, slug } = type.node

              return (
                <Flex
                  flexDirection="column"
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                  py={[28, 28, 28, 40]}
                  bg="gray.50"
                  bgImage={`url(${communityTypeMeta.typeImage.imageFile.childImageSharp.fluid.src})`}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  key={id}
                >
                  <Heading as="h4" color="white" textTransform="uppercase">
                    {name}
                  </Heading>
                  <Button
                    mt={4}
                    color="white"
                    textTransform="uppercase"
                    bg="primary.2"
                    borderRadius={0}
                  >
                    <Link href={`/${slug}`}>{name}</Link>
                  </Button>
                </Flex>
              )
            })}
          </Grid>
        </Box>
      )}
    </>
  )
}

export default PortalsGrid
