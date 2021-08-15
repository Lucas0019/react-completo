import React, { useContext } from 'react'
import UserContext from '../Components/UserContext'

const Product = () => {

  const dadosView = useContext(UserContext)
  console.log(dadosView);

  return (
    <>
      <p>{dadosView.nome}</p>
    </>
  )
}

export default Product
