import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsPlay, BsPause } from "react-icons/bs"
import { useRecoilState } from "recoil";
import useSpotify from "../../../hooks/useSpotify";
import { millisToMinutesAndSeconds } from "../../millisToMinutesAndSeconds"
import { currentTrackIdState } from "../../../../atoms/songAtom"
import { isPlayingState } from "../../../../atoms/isPlayingState"

export default function TracksResult({ track }) {

    const spotifyApi = useSpotify();
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

    const playSong = () => {
        setCurrentTrackId(track.id)
        setIsPlaying(true)
        spotifyApi.play({
            uris: [track.uri],
        })
    }

    return (
        <Flex
            w="96%"
            mt="12px"
            _hover={{
                backgroundColor: "#282828"
            }}
            cursor="pointer"
            transition="0.1s"
            onClick={() => {
                setCurrentTrackId(track.id),
                playSong()
            }}
        >
            <Image 
                src={track.albumImage} 
                w="50px"
                h="50px"
            />
            <Flex
                direction="column"
                ml="1rem"
                w="100%"
            >
                { track.title.length > 46 ? (<Text
                    whiteSpace="normal"
                >{track.title.substring(0, 42)}...</Text>) : ((<Text
                    whiteSpace="normal"
                >{track.title}</Text>)) }
                
                <Flex
                    w="100%"
                    color="rgb(100,100,100)"
                    justifyContent="space-between"
                >
                    <Text

                    >{track.artist}</Text>
                    <Text
                        mr="1rem"
                    >{millisToMinutesAndSeconds(track.duration)}</Text>
                </Flex>
                
            </Flex>
        </Flex>
    )
}