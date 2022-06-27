import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        gray: {
            "50": "#9f9f9f",
            "100": "#989898",
            "300": "#8a8a8a",
            "600": "#4e4e4e",
            "900": "#2d2d2d",
            "1000": "#212121"
        }
    },
    fonts: {
        heading: "Roboto",
        body: "Roboto",
    },
    styles: {
        global: {
            body: {
                bg: "gray.600",
                color: "gray.50",
                
            },
        }
    }
})