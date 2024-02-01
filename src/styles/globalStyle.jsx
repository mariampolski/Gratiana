import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', sans-serif;
    }
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', sans-serif;
    }
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', sans-serif;
    }
    body {
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
    }
`