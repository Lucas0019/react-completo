import React from 'react'

const CustomColor = {
  color: "tomato",
  fontSize: "1em",
  fontFamily: "Arial"
}

const Titulo = (props) => {
  // Assim como uma função pode receber argumentos, 
  // podemos também passar argumentos aos componentes. 
  // Esses são conhecimentos como propriedades ou props.
  return <h3 style={CustomColor}>{props.texto}</h3>;
};

export default Titulo
