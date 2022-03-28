import React from 'react'
import Produto from './components/Produto'
import LimparDados from './components/LimparDados'
import { GlobalStorage } from './GlobalContext'


const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <LimparDados />
    </GlobalStorage>
  )
}

export default App