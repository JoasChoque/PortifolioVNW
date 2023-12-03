import styled from "styled-components";

export const styleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50vw;

    @media (max-width: 800px){
       flex-direction: column;
       
       height: 100vh;
    }
`

export const styleContainter = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
height: 40vh;

@media (max-width: 800px){
       flex-direction: column;
       height: 100vh;
       justify-content: space-around;
    }
`

export const styleTitulo = styled.h1`
    color: white;
    font-family: 'Raleway', sans-serif;
    text-align: center;
    padding: 10px;
`