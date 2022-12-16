import styled from 'styled-components'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Entrar from './Entrar'
import Cadastro from './Cadastro'
import Habitos from './Habitos'
import Hoje from './Hoje'
import Historico from './Historico'
export default function App() {
  return (
    <Conteudo>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Entrar/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/habitos' element={<Habitos/>}/>
        <Route path='/hoje' element={<Hoje/>}/>
        <Route path='/historico' element={<Historico/>}/>


      </Routes>
      </BrowserRouter>
    </Conteudo>
    )
}
const Conteudo=styled.div`

`