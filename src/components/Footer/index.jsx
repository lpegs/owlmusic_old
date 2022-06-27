import { Box, Text, Image } from "@chakra-ui/react";
import { useSession } from "next-auth/react"

export function Footer(){

    const { data: session, status } = useSession()

    return (
        <Box
            w="100%"
            h="18px"
            background="gray.900"
            p="0"
            position="fixed"
            bottom="0"
            display="flex"
            alignItems="center"
        >   
            { status === "authenticated" ? (
                <>
                    <Image 
                        src={session?.user?.image} 
                        alt="profile picture" 
                        borderRadius="full"
                        w="15px"
                        h="15px"
                        m="0 0 0 45px"
                    />
                    <Text
                        textAlign="left"
                        ml="5px" 
                        fontSize="small"
                    >{session?.user?.email}</Text>
                </>
            ) : (<></>) }

            <Text
                w="100%"
                textAlign="right"
                m="0 45px 0 0" 
                fontSize="small"
            >Created by NCL System</Text>
        </Box>
    )
}