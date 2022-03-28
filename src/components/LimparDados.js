import React from 'react'
import {GlobalContext} from "../GlobalContext"

const LimparDados = () => {
  const {limparDados} = React.useContext(GlobalContext)
  return (
      <div>
        <button onClick={limparDados}>Clique para limpar</button>
    </div>
  )
}

export default LimparDados
