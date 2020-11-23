import React, { useRef } from "react"
import { useMediaQuery } from "react-responsive"
import {
  useDisclosure,
  Box,
  Link,
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import Container from "./Container"
import Logo from "./Icons/Logo"
import Nav from "./Nav"
import NavMobile from "./NavMobile"

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = useRef()

  return (
    <Box as="header">
      <Box py={[0, 0, 0, 2]} bg="primary.1">
        <Container>
          <Flex justifyContent={["center", "center", "center", "flex-end"]}>
            {isDesktop ? (
              <>
                <Link
                  href="#"
                  fontSize="14px"
                  color="white"
                  textTransform="uppercase"
                >
                  Find a Resort
                </Link>
                <Link
                  href="#"
                  ml={6}
                  fontSize="14px"
                  color="white"
                  textTransform="uppercase"
                >
                  The Roberts Difference
                </Link>
              </>
            ) : (
              <Button
                minW="220px"
                color="white"
                textTransform="uppercase"
                textShadow="1px 1px 0 rgba(0,0,0,0.4)"
                bg="primary.2"
                borderRadius={0}
              >
                <Link href="#" color="white">
                  Find a Resort
                </Link>
              </Button>
            )}
          </Flex>
        </Container>
      </Box>
      <Box py={[4, 4, 4, 0]} bg="white">
        <Container>
          <Flex
            flexDirection="row"
            flexWrap="nowrap"
            alignItems={["center", "center", "center", "stretch"]}
            justifyContent="space-between"
          >
            <Logo />
            {isDesktop && <Nav />}
            {!isDesktop && (
              <Button p={0} bg="transparent" onClick={onOpen}>
                <HamburgerIcon w="40px" h="40px" />
              </Button>
            )}
          </Flex>
        </Container>
      </Box>
      <Drawer
        placement="right"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <NavMobile />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export default Header
