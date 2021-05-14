import React from "react";
import Form from "./Components/Props/Form/Form";
import Header from "./Pages/Header"


const App = () => {

  const logado = true;
  const nome = 'Lucas';

  return (
    <>
      <h1>Props 🔥</h1>
      <Header logado={logado} nome={nome} />
      <Form/>
    </>
  );
};

export default App;
