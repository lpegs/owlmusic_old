import { Flex, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi"
import { useSession } from "next-auth/react";
import spotifyApi from "../../../../lib/spotify";
import TracksResult from "./TracksResult";

export function Logged(){

    const [ search, setSearch ] = useState("");
    const [ searchResults, setSearchResults ] = useState([]);

    useEffect(() => {
        if (!search) {
            return setSearchResults([])
        } else {
            if ( search.length > 2 ) {
            let cancel = false
            spotifyApi.searchTracks(search).then(res => {
                if (cancel) return
                setSearchResults(res.body.tracks?.items.map(track => {
                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumImage: track.album.images[0].url,
                        duration: track.duration_ms,
                        id: track.id
                    }
                })
                )
            })
            return () => cancel = true
        }
        }
    }, [search])

    const { data: session } = useSession();

    return (
        <Flex
            m="3rem auto"
            justify="center"
            w="100%"
            direction="column"
            align="center"
        >

            <Image 
                src={session?.user?.image} 
                alt="profile picture" 
                borderRadius="full"
                w="80px"
                h="100%"
            />

            <Text
                mt="1rem"
            >{session?.user?.name}</Text>

            <InputGroup
                mt="3rem"
            >
                <InputLeftElement
                    pointerEvents='none'
                    children={<Icon as={FiSearch}/>}
                />
                <Input
                    w="100%"
                    placeholder="Search songs"
                    size="md"
                    variant="outline"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />


            </InputGroup>

            { searchResults.map(track => (
                <TracksResult track={track} key={track.uri} />
            )) }
            

        </Flex>
    )
}