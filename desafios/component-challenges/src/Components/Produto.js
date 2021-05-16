import React from 'react';

const Produto = ({ nome, propriedades }) => {

  const borderCustom = {
    border: '1px solid', 
    margin: '1rem 0', 
    padding: '1rem'
  }

  return (
    <div style={borderCustom}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
