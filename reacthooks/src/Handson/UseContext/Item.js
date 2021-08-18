import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Item = () => {
  const global = useContext(GlobalContext);

  if(global.dados === null) return null;

  return (
    <div>
      <h1>Produtos: {' '}</h1>
      {global.dados.map((produto) =>  (
        <li key={produto.id}>
          {produto.nome}
        </li>
      ))}
    </div>
  );
};

export default Item;
