import React from "react"
import CardProjetos from "./Card"
import donare from "../assets/donare.png"
import contador from "../assets/contador.png"
import calculadora from "../assets/calculadora.png"
import blog from "../assets/blog.png"
import * as S from "../styles/styleProjetos"

function Projetos() {
    return(
        <>
        <S.styleTitulo>Alguns projetos desenvolvidos: </S.styleTitulo>
    <S.styleContainter>
        <S.styleDiv>
        <CardProjetos
            title="Projeto Donare"
            imageUrl={donare}
            githubLink="https://github.com/JoasChoque/Projeto-Donare-front"
            deployLink="https://donare-pi.vercel.app"
        />

        <CardProjetos
            title="Contador"
            imageUrl={contador}
            githubLink="https://github.com/JoasChoque/Contador-VNW"
            deployLink="https://contador-vnw-nine.vercel.app"
        />
    </S.styleDiv>
    </S.styleContainter>

    <S.styleContainter>
        <S.styleDiv>
        <CardProjetos
            title="Calculadora VNW"
            imageUrl={calculadora}
            githubLink="https://github.com/JoasChoque/Calculadora-VNW"
            deployLink="https://calculadora-vnw-pink.vercel.app"
        />

        <CardProjetos
            title="Blog Pessoal"
            imageUrl={blog}
            githubLink="https://github.com/JoasChoque/Blog-Pessoal-React"
            deployLink="https://blog-pessoal-gen.vercel.app"
        />
    </S.styleDiv>
    </S.styleContainter>
    </>
    )
}

export default Projetos;