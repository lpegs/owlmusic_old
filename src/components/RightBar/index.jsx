import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, Flex, Icon, Image, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, useDisclosure } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { BsPlay, BsPause } from "react-icons/bs"
import { FiFastForward, FiRewind, FiVolume, FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi"
import { Settings } from "./Settings";
import { useEffect, useState } from "react";
import useSpotify from "../../hooks/useSpotify";
import useSongInfo from "../../hooks/useSongInfo";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../../../atoms/songAtom";
import { isPlayingState } from "../../../atoms/isPlayingState";
import { millisToMinutesAndSeconds } from "../millisToMinutesAndSeconds";

export function RightBar(){

    const spotifyApi = useSpotify()

    const { data: session, status } = useSession();
    const [ currentTrackId, setCurrentTrackId ] = useRecoilState(currentTrackIdState)
    const [ isPlaying, setIsPlaying ] = useRecoilState(isPlayingState)
    const [ volume, setVolume ] = useState(20)
    const [ songTime, setSongTime ] = useState(0)

    


    // setInterval(() => {
    //       setSongTime(songTime + 1)
    //       console.log(songTime)
    // }, 1000);

    useEffect(() => {
        if (spotifyApi.getAccessToken() && currentTrackId) {
            spotifyApi.getMyCurrentPlayingTrack().then((data) => {
                setCurrentTrackId(data.body?.item?.id)
            })
        }
    })

    useEffect(() => {
        if (spotifyApi.getAccessToken() && currentTrackId) {
            spotifyApi.getMyCurrentPlayingTrack().then((data) => {
                setCurrentTrackId(data.body?.item?.id)
            })
        }
    })

    const handlePlayPause = () => {
        spotifyApi.getMyCurrentPlaybackState().then((data) => {
            if (data.body.is_playing) {
                setIsPlaying(false);
                spotifyApi.pause();
            } else {
                setIsPlaying(true);
                spotifyApi.play();
            }
        })
    }

    const songInfo = useSongInfo();
    console.log(songInfo)

    const fetchCurrentSong = () => {
        if (!songInfo) {
            spotifyApi.getMyCurrentPlayingTrack().then((data) => {
                setCurrentTrackId(data.body?.item?.id)

                spotifyApi.getMyCurrentPlaybackState().then((data) => {
                    setIsPlaying(data.body?.is_playing)
                })
            })
        }
    }

    useEffect(() => {
        if (spotifyApi.getAccessToken() && !currentTrackId) {
            fetchCurrentSong();
            setVolume(50)
        }
    })


    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        const accessToken = session?.user.accessToken
        if ( accessToken ) {
        spotifyApi.setVolume(volume)
        }
    }, [volume])

    return (
        <Box
            top="0"
            right="0"
            position="fixed"
            w="38px" 
            h="100%"  
            background="gray.900"
            boxShadow="dark-lg"
        >
            <Icon 
                as={MdOutlineKeyboardArrowLeft} 
                justifyContent="center"
                w="100%"
                m="auto"
                mt="0.75rem"
                h="1.5rem"
                onClick={onOpen}
                color="gray.300"
                cursor="pointer"
                _hover={{
                    transition: "0.2s",
                    color: "gray.50",
                }}
            />

            <Icon 
                as={FiFastForward} 
                justifyContent="center"
                w="100%"
                m="auto"
                mt={["33vh", "33vh", "33vh", "33vh", "33vh", "40vh"]}
                h="1.25rem"
                color="gray.300"
                cursor="pointer"
                onClick={() => { spotifyApi.skipToNext() }}
                _hover={{
                    transition: "0.2s",
                    color: "gray.50",
                }}
            />

            { isPlaying ? (<Icon 
                as={BsPause} 
                justifyContent="center"
                w="100%"
                m="auto"
                mt="1rem"
                h="1.75rem"
                color="gray.300"
                cursor="pointer"
                onClick={() => {
                    handlePlayPause()
                }}
                _hover={{
                    transition: "0.2s",
                    color: "gray.50",
                }}
            />) : (<Icon 
                as={BsPlay} 
                justifyContent="center"
                w="100%"
                m="auto"
                mt="1rem"
                h="1.75rem"
                color="gray.300"
                cursor="pointer"
                onClick={() => {
                    handlePlayPause()
                }}
                _hover={{
                    transition: "0.2s",
                    color: "gray.50",
                }}
            />) }

            <Icon 
                as={FiRewind} 
                justifyContent="center"
                w="100%"
                m="auto"
                mt="1rem"
                h="1.25rem"
                color="gray.300"
                cursor="pointer"
                onClick={() => { spotifyApi.skipToPrevious() }}
                _hover={{
                    transition: "0.2s",
                    color: "gray.50",
                }}
            />

            <Settings />

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size="md"
            >
                <DrawerContent bg="gray.900" boxShadow="dark-lg">
                    {/* <DrawerCloseButton /> */}
                    <DrawerBody>
                        <Flex
                            p="7%"
                            align="center"
                            justifyContent="center"
                            w="100%"
                        >
                            <Image
                                src={songInfo?.album?.images[0].url}
                                mt={["2rem", "2rem", "2rem", "2rem", "2rem", "10rem"]}
                                alt={songInfo?.artists[0]?.name}
                                borderRadius="base"
                                boxShadow="dark-lg"
                                w="250px"
                            />
                        </Flex>

                        <Flex
                            align="center"
                            justifyContent="center"
                            textAlign="center"
                        >
                        <Text
                            fontSize="1.5rem"
                        >{songInfo?.name}</Text>
                        
                        </Flex>
                        <Flex
                            align="center"
                            justifyContent="center"
                            w="100%"
                        >
                        <Text
                            fontSize="0.85rem"    
                        >{songInfo?.artists[0]?.name}</Text>
                        </Flex>

                        <Flex w="100%" align="center"
                            justifyContent="center"> 

                        <Slider 
                            aria-label='slider-ex-1' 
                            m="15%"
                            onChangeEnd={(val) => {
                                setSongTime(val)
                                var time = ((val * songInfo?.duration_ms) / 100)
                                spotifyApi.seek(parseInt(Math.round(time)))
                            }}
                            defaultValue={0}
                            focusThumbOnChange={false}
                            
                        >
                            <SliderMark value={0} mt='10px' ml='-4.5' fontSize='sm'>
                                {millisToMinutesAndSeconds((songTime * songInfo?.duration_ms) / 100)}
                            </SliderMark>
                            <SliderMark value={93} mt='10px' ml='0' fontSize='sm'>
                                {millisToMinutesAndSeconds(songInfo?.duration_ms)}
                            </SliderMark>
                            <SliderTrack bg="gray.600">
                                <SliderFilledTrack bg="gray.1000" />
                            </SliderTrack>
                            <SliderThumb />
                            </Slider>

                        </Flex>

                        <Flex
                            w="100%"
                            align="center"
                            justifyContent="center"
                        >
                            <Icon 
                                as={FiRewind}
                                w="33%"
                                m="auto"
                                h="2rem"
                                cursor="pointer"
                                onClick={() => { spotifyApi.skipToPrevious() }}

                                _hover={{
                                    transition: "0.2s",
                                    color: "gray.600",
                                }}
                            />
                            { isPlaying ? (<Icon 
                                as={BsPause} 
                                w="33%" 
                                m="auto"
                                h="3.2rem"
                                onClick={() => {
                                    handlePlayPause()
                                }}
                                cursor="pointer"
                                _hover={{
                                    transition: "0.2s",
                                    color: "gray.600",
                                }}
                            />) : (<Icon 
                                as={BsPlay} 
                                w="33%" 
                                m="auto"
                                h="3.2rem"
                                onClick={() => {
                                    handlePlayPause()
                                }}
                                cursor="pointer"
                                _hover={{
                                    transition: "0.2s",
                                    color: "gray.600",
                                }}
                            />) }
                            
                            <Icon 
                                as={FiFastForward} 
                                w="33%" 
                                m="auto"
                                h="2rem"
                                cursor="pointer"
                                onClick={() => { () => {
                                    spotifyApi.skipToNext()
                                    }
                                }}
                                _hover={{
                                    transition: "0.2s",
                                    color: "gray.600",
                                }}
                            />

                        </Flex>

                        <Flex
                            w="100%"
                            align="center"
                            justifyContent="center"
                            p="5rem"
                        >
                            
                            { volume === 0 ? (<Icon
                                as={FiVolumeX}
                                w="25px"
                                h="25px"
                                onClick={() => {
                                    setVolume(20)
                                } }
                            />) : volume < 33 ? (<Icon
                                as={FiVolume}
                                w="25px"
                                h="25px"
                                onClick={() => setVolume(0)}
                            />) : volume > 32 && volume < 66 ? (<Icon
                                as={FiVolume1}
                                w="25px"
                                h="25px"
                                onClick={() => setVolume(0)}
                            />) : volume > 65 ? (<Icon
                                as={FiVolume2}
                                w="25px"
                                h="25px"
                                onClick={() => setVolume(0)}
                            />) : (<Icon
                                as={FiVolume}
                                w="25px"
                                h="25px"
                            />) }
                            
                            <Slider 
                                ml="1rem"
                                colorScheme="black"
                                defaultValue={volume}
                                onChangeEnd={ (data) => {
                                    setVolume(data)
                                } }
                                focusThumbOnChange={false}
                            >
                                <SliderTrack bg="gray.600">
                                    <SliderFilledTrack bg="gray.1000" />
                                </SliderTrack>
                                <SliderThumb
                                />
                            </Slider>
                        </Flex>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            
        </Box>
    )
}