import React, {useState} from 'react'
import Modal from './Modal'
import ButtonModal from './ButtonModal'

const UseSateProps = () => {
  
  // Podemos passar o estado e afunção de modificações 
  // como propriedades para outros elementos
  const [modal, setModal] = useState(false)

  return (
    <>
      <div>
        <Modal modal={modal} setModal={setModal}/>
        <ButtonModal setModal={setModal}/>
      </div>
    </>
  )
}

export default UseSateProps
