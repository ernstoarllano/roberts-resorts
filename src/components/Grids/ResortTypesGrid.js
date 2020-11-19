import React from "react"
import { Grid, Flex, Heading, Button, Link } from "@chakra-ui/react"

const ResortTypesGrid = ({ types, resort }) => {
  return (
    <Grid
      gridTemplateColumns={["", "", "", "repeat(3,1fr)"]}
      gap={[0, 0, 0, 1]}
    >
      {types.edges.map(type => {
        const { communityTypeMeta, name, slug } = type.node

        return (
          <Flex
            flexDirection="column"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            py={40}
            bg="gray.50"
            bgImage={`url(${communityTypeMeta.typeImage.imageFile.childImageSharp.fluid.src})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            key={slug}
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
              <Link href={`/resort/${resort.slug}/${slug}`}>Learn More</Link>
            </Button>
          </Flex>
        )
      })}
    </Grid>
  )
}

export default ResortTypesGrid
