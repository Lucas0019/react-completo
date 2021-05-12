import React from 'react'

const Style = () => {
  // O style irá receber um objeto com as propriedades do elemento em camelCase.

  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  const boxRed = {
    background: 'tomato',
    color: 'white',
    padding: '1em',
    borderRadius: '5px'
  }

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>
      <div style={ boxRed }>
        <p>Text</p>
      </div>
    </div>
  );
};


export default Style
