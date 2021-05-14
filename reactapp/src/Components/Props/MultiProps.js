import React from 'react'


const MultiProps = (props) => {
  // Podemos passar quantas propriedades quisermos
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

export default MultiProps
