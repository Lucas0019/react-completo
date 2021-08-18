import React, {useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const Limpar = () => {
  const { limparDados } = useContext(GlobalContext)
  return <button onClick={limparDados}>Limpar</button>
  
}

export default Limpar
