import React from 'react'

const ButtonModal = ({setModal}) => {
  return (
    <button onClick={() => setModal(true)}> 
      Abrir Modal
    </button>
  )
}

export default ButtonModal
