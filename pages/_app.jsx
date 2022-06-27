import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} >
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
