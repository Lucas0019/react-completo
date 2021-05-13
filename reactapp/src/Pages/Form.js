import React from 'react';
import Button from '../Components/Interfaces/Button';
import Input from '../Components/Interfaces/Input'; 

const Form = () => {

  // Não existe limite para a composição de componentes,
  // eles podem ser desde componentes gerais como Header e Footer, 
  // até micro componentes como Input e Button.

  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form;
