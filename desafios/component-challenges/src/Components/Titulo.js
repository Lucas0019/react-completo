import React from 'react'

const Titulo = ({text}) => {

  const titleCustom = {
    color: "#282a36",
    fontFamily: "Fira Code"
  }

  // Usando props
  return (
    <>
      <h1 style={titleCustom}>
        {text}
      </h1> 
    </>
  )
}

export default Titulo
