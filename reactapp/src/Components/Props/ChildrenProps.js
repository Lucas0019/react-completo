import React from 'react'

const ChildrenProps = (props) => {
  // Se utilizarmos o componente abrindo e fechando o mesmo, 
  // o conteúdo interno deste será acessado através da propriedade children.
  return <h1>{props.children}</h1>;
}

export default ChildrenProps
