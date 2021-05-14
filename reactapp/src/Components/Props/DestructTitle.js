import React from 'react'

const DestructTitle = ({ cor, texto }) => {
  // É comum desestruturarmos as propriedades.
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

export default DestructTitle
