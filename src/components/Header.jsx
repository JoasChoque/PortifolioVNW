import React from "react"
import { Link } from "react-router-dom"
import * as S from "../styles/styleHeader"

function Header() {
    return(
    <>
        <S.styleHeader>
            <nav>
                <S.styleUl>
                    <S.styleLi>
                        <Link to="/">Inicio</Link>
                    </S.styleLi>
                    <S.styleLi>
                        <Link to ="/sobre">Sobre</Link>
                    </S.styleLi>
                    <S.styleLi>
                        <Link to="/projetos">Projetos</Link>
                    </S.styleLi>
                </S.styleUl>
            </nav>
        </S.styleHeader>
    </>
    )
}

export default Header