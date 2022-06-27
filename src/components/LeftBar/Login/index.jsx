import { Flex, Button, Image, Text } from "@chakra-ui/react";
import { getProviders, signIn } from "next-auth/react"
import Link from "next/link";
import { AUTH_URL } from "../../../../lib/spotify";

export function Login() {
    return (
        <>
            <Flex
                w="100%"
                h="100%"
                m="auto"
                align="center"
                justify="center"
                flexDirection="column"
            >
                    
                    <Button
                        bg="gray.1000"
                        borderRadius="full"
                        padding="30px"
                        color="gray.100"
                        w="300px"
                        mt="1rem"
                        onClick={() => signIn("spotify")}
                        _hover={{ bg: "#1e4925", color: "#f0f0f0" }}
                    >
                        <Flex
                            w="100%"
                            align="center"
                        >
                            <Text

                                w="90%"
                            >Login with Spotify</Text>
                            <Image
                                src="/spotify.png"
                                alt="Spotify"
                                w="25px"
                                h="25px"
                            />
                        </Flex>
                        
                    </Button>
                    
                <Button
                    bg="gray.1000"
                    borderRadius="full"
                    padding="30px"
                    color="gray.100"
                    w="300px"
                    mt="1rem"
                    _hover={{ bg: "#1e2949", color: "#f0f0f0" }}
                >
                    <Flex
                        w="100%"
                        align="center"
                    >
                        <Text
                            w="90%"  
                        >Login with Facebook</Text>
                        <Image
                            src="/facebook.png"
                            alt="Spotify"
                            w="25px"
                            h="25px"
                        />
                    </Flex>
                    
                </Button>
                <Button
                    bg="gray.1000"
                    borderRadius="full"
                    padding="30px"
                    color="gray.100"
                    w="300px"
                    mt="1rem"
                    _hover={{ bg: "#1e4049", color: "#f0f0f0" }}
                >
                    <Flex
                        w="100%"
                        align="center"
                    >
                        <Text
                            w="90%"  
                        >Login with Twitter</Text>
                        <Image
                            src="/twitter.png"
                            alt="Spotify"
                            w="25px"
                            h="20px"
                        />
                    </Flex>
                    
                </Button>
                <Button
                    bg="gray.1000"
                    borderRadius="full"
                    padding="30px"
                    color="gray.100"
                    w="300px"
                    mt="1rem"
                    _hover={{ bg: "#616161", color: "#f0f0f0" }}
                >
                    <Flex
                        w="100%"
                        align="center"
                    >
                        <Text
                            w="90%"  
                        >Login with Github</Text>
                        <Image
                            src="/github.png"
                            alt="Spotify"
                            w="25px"
                            h="25px"
                        />
                    </Flex>
                    
                </Button>
            </Flex>
        </>
    )
}