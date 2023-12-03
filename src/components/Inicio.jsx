import React from "react"
import Teste from "../assets/profile.png"
import Github from "../assets/github.svg"
import Linkedin from "../assets/linkedin.svg"
import * as S from "../styles/styleInicio"

function Inicio() {
   return(
    <>
        <S.styleSection>
            <figure>
                <S.styleImg src={Teste} alt="foto" />
            </figure>

            <S.styleDiv>
                <h1>Olá, meu nome é Joas</h1>
                <h2>Sou Desenvolvedor Full Stack Jr</h2>
            

            <figure>
                <a href="https://github.com/JoasChoque" target="_blank">
                    <img src={Github} alt="ícone github"/>
                </a>
                <a href="https://www.linkedin.com/in/joas-choque/" target="_blank">
                    <img src={Linkedin} alt="ícone linkedin" />
                </a>
            </figure>
            </S.styleDiv>
        </S.styleSection>
    </>
   )
}

export default Inicio;