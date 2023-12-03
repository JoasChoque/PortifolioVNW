import styled from "styled-components"

export const styleSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 90vh;

    @media (max-width: 800px){
        flex-direction: column;
    }
`

export const styleImg = styled.img`
    width: 20vw;
    border-radius: 50%;
    border: 3px solid white;
    @media (max-width: 800px){
        width: 50vw;
    }
`

export const styleDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 20vh;
    width: 40vw;
    justify-content: space-evenly;
    margin-left: 30px;
    align-items: center;
    h1,h2{ 
        color: white;
        font-family: 'Raleway', sans-serif;
    }

    h1{
        font-size: 3.75rem;
    }

    h2{
        color: rgba(255, 255, 255, 0.50);
        font-size: 1.875rem;
    }
    
    figure{
        width: 5vw;
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 800px){
        margin-top: 30px;
        width: 80vw;
        height: 20vh;
        justify-content: space-between;
        text-align: center;
        margin-left: 0;
        h1{
            font-size: 1.75rem;
        }

        h2{
            font-size: 1.063rem;
        }

        figure{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 40vw;
        }
    }
`