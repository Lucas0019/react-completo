import React from 'react'

const Modal = ({modal, setModal}) => {

  if (modal === true)
  return (
    <div>
      Esse é um modal
      <button onClick={() => setModal(false)}>Fechar Modal</button>      
    </div>
  )
  return  null;
}

export default Modal
