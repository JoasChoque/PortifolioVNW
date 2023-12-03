import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
    body{
        background-color: #090E16;
    }
`