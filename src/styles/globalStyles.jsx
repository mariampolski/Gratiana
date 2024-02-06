import { createGlobalStyle } from "styled-components"
import "@fontsource/comic-neue/300.css"
import "@fontsource/comic-neue/300-italic.css"
import "@fontsource/comic-neue/400.css"
import "@fontsource/comic-neue/400-italic.css"
import "@fontsource/comic-neue/700.css"
import "@fontsource/comic-neue/700-italic.css"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Comic Neue', sans-serif;
    }
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Comic Neue', sans-serif;
    }
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Comic Neue', sans-serif;
    }
    body {
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
    }
`
