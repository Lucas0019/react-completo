import React, {useState, useEffect} from 'react'
import Produto from './Produto'

const UseEffect = () => {

  const [produto, setProduto] = useState(null)

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if (produtoLocal !== null) setProduto(produtoLocal)
  }, [])

  useEffect(() => {
    document.title = 'Hands on Hook 🧊' 
    if(produto !== null ) window.localStorage.setItem('produto', produto)
  }, [produto])


  function  handleClick({target}) {
    setProduto(target.innerText)
  }


  return (
    <>
     <h1>Preferences: {produto} </h1>
     <section>
      <button onClick={handleClick} style={ {marginRight: '1rem'} }>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto} />
     </section>
    </>
  )
}

export default UseEffect
