import React from "react";

// O cenário mais comum é trabalhar com array's de objetos.
const ArraysObjetos = () => {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  const frutas = [
    { nome: "Uva", preco: 20 },
    { nome: "Pera", preco: 10 },
    { nome: "Banana", preco: 25 },
  ];

  return (
    <>
      <section>
        <ul>
          {livros
            .filter((livro) => livro.ano >= 1998)
            .map((livro) => (
              <li key={livro.nome}>
                {livro.nome}, {livro.ano}
              </li>
            ))}
        </ul>
      </section>

      <section>
        <ul>
          {frutas 
            .filter((fruta) => fruta.preco >= 20)
            .map((fruta) => (
              <li key={fruta.nome}>
                {fruta.nome}, {fruta.preco}
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default ArraysObjetos;
