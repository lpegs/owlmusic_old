import { Box, Flex } from "@chakra-ui/react";
import { LeftBar } from "../src/components/LeftBar";
import { RightBar } from "../src/components/RightBar";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Content } from "../src/components/Content";
import Head from "next/head";
import { useSession } from "next-auth/react";
import useSongInfo from "../src/hooks/useSongInfo";

export default function Home(){

  const { data : session, status } = useSession();

  const songInfo = useSongInfo();

  // console.log(session)

  return (
    <>

      <Head>
        <title>Owl Music</title>
      </Head>

      <Footer/>

      <Flex>
        
        <LeftBar/>

        <Header/>

        <RightBar/>

      </Flex>

      <Content/>   

    </>

  )
}

