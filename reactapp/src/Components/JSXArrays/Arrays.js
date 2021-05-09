import React from "react";

const index = () => {
  // O JSX irá listar cada um dos itens da array.
  // Ele não irá separar ou colocar vírgula,
  // é você que deve modificar a array para o resultado desejado.
  const filmes = ["Filme1", "Filme2", "Filme3"];

  // O JSX necessita de uma key única para cada elemento da Array.
  const empresas = [
    <li key="e1">Apple</li>,
    <li key="e2">Google</li>,
    <li key="e3">Amazon</li>,
  ];

  return (
    <>
      <section>
        <p>{filmes}</p>
        <p>{empresas}</p>
      </section>
    
     <section>
      <ul>
          {filmes.map((filme) => (
            <li key={filme}>{filme}</li>
          ))}
        </ul>
     </section>
    </>
  );
};

export default index;
