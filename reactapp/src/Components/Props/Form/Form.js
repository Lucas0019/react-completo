import React from 'react'
import Button from './Button'
import Input from "./Input"

const Form = () => {
  return (
    <>
      <Input id="email"label="Email" required/>
      <Input id="senha"label="Senha" type="password"/>
      <Button/> 
    </>
  )
}

export default Form
