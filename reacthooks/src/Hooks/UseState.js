import React, {useState} from "react";

const UseSate = () => {
  const [ativo, setAtivo] = useState(true);
  // É a mesma coisa que:
  // const ativoArray = React.useState(true);
  // const ativo = ativoArray[0];
  // const setAtivo = ativoArray[1];

  // Multiplos estados
  const [dados, setDados] = useState({
    nome: "Lucas Xavier",
    idade: "21",
    escolaridade: "Superior Completo",
    profissao: "Front End Developer"
  })
  
  
  const handleClick = () => {
    setAtivo(!ativo)
    setDados({...dados, empresa: "Codeby"})
  }

  return (
    <>
     <div>
        <p>{dados.nome}</p>
        <p>{dados.idade} anos</p>
        <p>{dados.escolaridade}</p>
        <p>{dados.profissao}</p>
        <p>{dados.empresa}</p>
        <button onClick={handleClick}>
          {ativo ? 'Botão Ativo' : 'Botão Inativo'}
        </button>
     </div>
    </>
  );
};


export default UseSate;
