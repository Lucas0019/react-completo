import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";


const App = () => {
  // Verificando e Trocando Rotas
  const { pathname } = window.location;

  let Page;
  if (pathname === '/produtos') {
    Page = Produtos;
  } else {
    Page = Home;
  }

  return (
    <>
      <Header/>
      <Page/>
    </>
  );
};

export default App;
