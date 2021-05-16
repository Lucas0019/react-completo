import React from 'react';
import Titulo from '../Components/Titulo';
import Produto from '../Components/Produto'

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <Titulo text="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
