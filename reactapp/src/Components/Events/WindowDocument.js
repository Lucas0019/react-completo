import React from 'react'

const WindowDocument = () => {
  // Eventos no window/document ou qualquer elemento fora do React, 
  // devem ser adicionados com JavaScript normalmente, usando o addEventListener.

  // Esse tipo de evento será adicionado com o hook useEffect
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return <div style={{ height: '200vw' }}>Div</div>;
}

export default WindowDocument
