import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import * as S from "./styles/Global"
import Inicio from "./components/Inicio"
import Sobre from "./components/Sobre"
import Projetos from "./components/Projetos"
import Header from "./components/Header"

function App() {
  return (
    <>
      <S.GlobalStyle/>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/projetos" element={<Projetos/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
