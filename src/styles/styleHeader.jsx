import styled from "styled-components"

export const styleHeader = styled.header`
    color: white;
    font-weight: 700;
    font-size: 24px;
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(123, 74, 226, 0.05);
    height: 10vh;
`
export const styleUl = styled.ul`
    list-style: none;
    display: flex;
    width: 50vw;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 800px){
            width: 80vw;
            font-size: 1.25rem;
        }
`

export const styleLi = styled.li`
    transition: color 0.3s;
    &:hover{
        color: rgba(123, 74, 226, 0.50);
        border-bottom: 2px solid rgba(123, 74, 226, 0.50);
    }
`