import { useState } from 'react'
import { Input } from './Input'

export const CustomInput = () => {
  
  const [ nome, setNome ] = useState('')
  const [ email, setEmail ] = useState('')
  
  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
      <Input
        label="Email"  
        id="email"
        type="email"
        value={email}
        setValue={setEmail}
      />
    </form>
  )
}

