import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: #091020;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
        color: white;
    }
`;