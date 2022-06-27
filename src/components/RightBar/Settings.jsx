import { Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Text, Flex, useColorMode, Switch, Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { FiSettings } from "react-icons/fi";

export function Settings(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { toggleColorMode } = useColorMode()

    return (
        <>
            <Icon 
                as={FiSettings}
                justifyContent="center"
                w="100%"
                m="auto"
                mt={["37.5vh","37.5vh", "37.5vh", "37.5vh", "37.5vh", "40vh"]}
                h="0.9rem"
                color="gray.300"
                cursor="pointer"
                _hover={{
                    transition: "0.2s",
                    color: "gray.50",
                }}
                onClick={onOpen}
            />

                <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" size="4xl" isCentered>
                    <ModalOverlay />
                    <ModalContent
                        h="550px"
                        bg="gray.900"
                        p="2%"
                    >
                        <ModalCloseButton 
                            m="2%"
                        />
                        <Text
                            fontWeight="bold"
                            align="center"
                            justifyContent="center"
                        >
                            SETTINGS
                        </Text>
                        <Flex
                            mt="4%"
                            w="100%"
                            h="100%"
                            align="center"
                            justify="center"
                            direction="column"
                        >
                            <Text>Audio quality: 0 - 1 - 2 - 3 - 4 - 5</Text>
                            <Text>Audio quality: 0 - 1 - 2 - 3 - 4 - 5</Text>
                            <Text>Audio quality: 0 - 1 - 2 - 3 - 4 - 5</Text>
                            <Text>Audio quality: 0 - 1 - 2 - 3 - 4 - 5</Text>
                            <Text>Audio quality: 0 - 1 - 2 - 3 - 4 - 5</Text>

                            <Switch onClick={toggleColorMode} />
                            <Button
                                colorScheme="red"
                                m="3rem"
                                onClick={() => signOut()}
                            >
                                Logout
                            </Button>
                            

                        </Flex>
                        
                        <ModalBody>
                            <Text></Text>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
    )
}