import styled from "styled-components"

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
`

export const styleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgba(123, 74, 226, 0.50);
    color: white;
    font-family: 'Raleway', sans-serif;
    height: 70vh;
    width: 60vw;

    @media (max-width: 800px){
        height: 90vh;
        width: 100vw;
        border: none;
        justify-content: space-around;
    }
`

export const styleTitulo = styled.h1`
color: white;
`

export const styleTexto = styled.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 15px;

    @media (max-width: 800px){
        font-size: 1.125rem;
        padding: 0;
    }
`