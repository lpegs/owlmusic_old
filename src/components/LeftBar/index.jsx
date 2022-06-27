import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Logged } from "./Logged";
import { Login } from "./Login";

export function LeftBar(){

  const { data: session, status } = useSession()

  var code = null

  if (typeof window !== "undefined") {
    code = new URLSearchParams(window.location.search).get("code");
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
      <Box
        top="0"
        left="0"
        position="fixed"
        w="38px" 
        h="100%" 
        background="gray.900"
        boxShadow="dark-lg"
      >
        <Icon 
          as={MdOutlineKeyboardArrowRight} 
          justifyContent="center"
          w="100%"
          m="auto"
          mt="47.5vh"
          h="1.5rem"
          color="gray.300"
          onClick={onOpen}
          cursor="pointer"
          _hover={{
              transition: "0.2s",
              color: "gray.50",
          }}
        />

        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          size="md"
        >
          <DrawerContent bg="gray.900" boxShadow="dark-lg">
            {/* <DrawerCloseButton /> */}
              <DrawerBody>
                { status === "authenticated" ? (<Logged />) : (<Login />) }
              </DrawerBody>
          </DrawerContent>
        </Drawer>

      </Box>
  )
}