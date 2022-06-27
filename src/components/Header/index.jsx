import { Flex, Image, Text } from "@chakra-ui/react";

export function Header(){

    return (
        <div
            style={{
                backgroundImage: 'url("/texture3.png")',
                display: "flex",
                height: "600px",
                width: "100%",
                padding: "0 38px",
                backgroundColor:"#2d2d2d"
            }}
        >

            <Text
                cursor="default"
                color="gray.1000"
                w="100%"
                fontSize={[170, 170, 170, 170, 170, 250]}
                textAlign="center"
                justifyContent="center"
                align="center"
                m="auto"
            >OWL MUSIC</Text>
            <Image 
                src="owl-header.png" 
                alt="Owl Image"
            />
        </div>
    )
}