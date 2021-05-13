import React from 'react'

const Return = () => {

  // Um componente deve sempre retornar algo. 
  // O retorno pode ser qualquer tipo de dado aceitado pelo JSX 
  // (string, array, um elemento JSX, null e etc).

  const active = true;
  if (active) {
    return <p style={{color: 'Tomato'}}>Ativo</p>;
  } else {
    return null;
  }
};

export default Return
