import { Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import useSpotify from "../../hooks/useSpotify";
import { Player } from "../Player" 
import useSongInfo from "../../hooks/useSongInfo";
import { useSession } from "next-auth/react";
import SpotifyPlayer from 'react-spotify-web-playback';

export function Content(){  

    const spotifyApi = useSpotify();
    const songInfo = useSongInfo();
    const { data: session, status } = useSession();

    console.log(songInfo)

    return (
        <>
            <Flex
                p="0 42px"
                align="center"
                maxWidth={1480}
                mx="auto"
                css={{
                    scrollbarWidth: "none"
                  }}
            >
                <Text
                    w="100%"
                    mt="10rem"
                    textAlign="center"
                    fontSize="2xl"
                    color="gray.1000"
                >Listening your way!</Text>
            </Flex>
            <Icon 
                as={FiChevronDown}
                w="100%"
                h="2rem"
                mt="3rem"
                color="gray.1000"
            />

            <Flex
                p="0 42px"
                w="100%"
                align="center"
                justify="center"
            >
                <Text
                    w="100%"
                    m="4rem"
                    fontSize="2xl"
                >Albums</Text>

            </Flex>

            <Flex w="87%" align="center" mx="auto" mb="5rem" border="1px solid #474747" borderRadius="full" ></Flex>

            <HStack
                mx="auto"
                justify="center"
                w="90%"
                mt="2rem"
                align="center"
                textAlign="center"
                alignItems="center"
                spacing={["2.5rem", "2.5rem", "2.5rem", "2.5rem", "8rem", "9rem"]}
            >   
                <Image 
                    w="25%"
                    src="/albuns/ice.jpg" 
                    boxSize={[170, 170, 170, 170, 170, 250]}
                    boxShadow="dark-lg" 
                    cursor="pointer"
                    borderRadius="10px"
                />
                
                <Image w="25%" src="/albuns/drake.jpg" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="10px" />
                <Image w="25%" src="/albuns/sacrifice.jpg" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="10px" />
                <Image w="25%" src="/albuns/x.png" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="10px" />
            </HStack>

            <HStack
                mx="auto"
                justify="center"
                w="86.5%"
                mt="2rem"
                align="center"
                textAlign="center"
                color="gray.50"
            >
                <Text
                    w="25%"
                >Scaled and Icy</Text>
                <Text
                    w="25%"
                >Certified Lover Boy</Text>
                <Text
                    w="25%"
                >Dawn FM</Text>
                <Text
                    w="25%"
                >x</Text>
            </HStack>

            <HStack
                mx="auto"
                justify="center"
                w="86.5%"
                align="center"
                textAlign="center"
                color="gray.1000"
            >
                <Text
                    w="25%"
                >Twenty One Pilots</Text>
                <Text
                    w="25%"
                >Drake</Text>
                <Text
                    w="25%"
                >The Weeknd</Text>
                <Text
                    w="25%"
                >Ed Sheeran</Text>
            </HStack>

            <Flex
                p="0 42px"
                w="100%"
                align="center"
                justify="center"
                mt="10rem"
            >
                <Text
                    w="100%"
                    m="4rem"
                    fontSize="2xl"
                >Songs</Text>

            </Flex>

            <Flex w="87%" align="center" mx="auto" mb="5rem" border="1px solid #474747" borderRadius="full" ></Flex>

            <HStack
                mx="auto"
                justify="center"
                w="90%"
                mt="2rem"
                align="center"
                textAlign="center"
                alignItems="center"
                spacing={["2.5rem", "2.5rem", "2.5rem", "2.5rem", "8rem", "9rem"]}
            >   
                <Image 
                    src="/albuns/ice.jpg" 
                    boxSize={[170, 170, 170, 170, 170, 250]}
                    boxShadow="dark-lg" 
                    cursor="pointer"
                    borderRadius="3px"
                />
                <Image src="/albuns/drake.jpg" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="3px" />
                <Image src="/albuns/sacrifice.jpg" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="3px" />
                <Image src="/albuns/x.png" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="3px" />
            </HStack>

            <HStack
                mx="auto"
                justify="center"
                w="86.5%"
                mt="2rem"
                align="center"
                textAlign="center"
                color="gray.50"
            >
                <Text
                    w="25%"
                >Scaled and Icy</Text>
                <Text
                    w="25%"
                >Certified Lover Boy</Text>
                <Text
                    w="25%"
                >Dawn FM</Text>
                <Text
                    w="25%"
                >x</Text>
            </HStack>

            <HStack
                mx="auto"
                justify="center"
                w="86.5%"
                align="center"
                textAlign="center"
                color="gray.1000"
            >
                <Text
                    w="25%"
                >Twenty One Pilots</Text>
                <Text
                    w="25%"
                >Drake</Text>
                <Text
                    w="25%"
                >The Weeknd</Text>
                <Text
                    w="25%"
                >Ed Sheeran</Text>
            </HStack>


            
            <Flex
                p="0 42px"
                w="100%"
                align="center"
                justify="center"
                mt="10rem"
            >
                <Text
                    w="100%"
                    m="4rem"
                    fontSize="2xl"
                >Trending now</Text>

            </Flex>

            <Flex w="87%" align="center" mx="auto" mb="5rem" border="1px solid #474747" borderRadius="full" ></Flex>

            <HStack
                mx="auto"
                justify="center"
                w="90%"
                mt="2rem"
                align="center"
                textAlign="center"
                alignItems="center"
                spacing={["2.5rem", "2.5rem", "2.5rem", "2.5rem", "8rem", "9rem"]}
            > 
                <Image src="/albuns/ice.jpg" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="3px"/>
                <Image src="/albuns/drake.jpg" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="3px" />
                <Image src="/albuns/sacrifice.jpg" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="3px" />
                <Image src="/albuns/x.png" boxSize={[170, 170, 170, 170, 170, 250]} boxShadow="dark-lg" cursor="pointer" borderRadius="3px" />
            </HStack>

            <HStack
                mx="auto"
                justify="center"
                w="86.5%"
                mt="2rem"
                align="center"
                textAlign="center"
                color="gray.50"
            >
                <Text
                    w="25%"
                >Scaled and Icy</Text>
                <Text
                    w="25%"
                >Certified Lover Boy</Text>
                <Text
                    w="25%"
                >Dawn FM</Text>
                <Text
                    w="25%"
                >x</Text>
            </HStack>

            <HStack
                mx="auto"
                justify="center"
                w="86.5%"
                align="center"
                textAlign="center"
                color="gray.1000"
            >
                <Text
                    w="25%"
                >Twenty One Pilots</Text>
                <Text
                    w="25%"
                >Drake</Text>
                <Text
                    w="25%"
                >The Weeknd</Text>
                <Text
                    w="25%"
                >Ed Sheeran</Text>
            </HStack>

            <Flex
                p="0 42px"
                w="100%"
                align="center"
                justify="center"
                mt="15rem"
            >
                <Image src="owl.png" w="200px" />
            </Flex>

            <Flex
                p="0 42px"
                w="100%"
                align="center"
                justify="center"
            >
                <Text
                    w="100%"
                    m="4rem"
                    fontSize="2xl"
                    align="center"
                    color="gray.1000"
                >Thank you for listening with us!</Text>
            </Flex>
            <Flex display="none">
                {/* <Player accessToken={session?.user?.accessToken} trackUri={songInfo?.uri} /> */}
            </Flex>
            
        </>
    )
}