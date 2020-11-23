import React from "react"
import { Box, Button } from "@chakra-ui/react"

import Container from "./Container"

const Promotions = ({ content }) => {
  return (
    <Box as="section" py={16}>
      <Container>
        <Box textAlign="center">
          <Box
            className="cms-content"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <Button
            minW={["", "", "", "270px"]}
            mt={4}
            fontWeight="600"
            color="white"
            textTransform="uppercase"
            textShadow="1px 1px 0 rgba(0,0,0,0.4)"
            bg="primary.2"
            borderRadius={0}
          >
            Current Specials & Promotions
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Promotions
