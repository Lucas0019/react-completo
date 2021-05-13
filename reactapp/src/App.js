import React from "react";
import Header from './Pages/Header';
import Sobre from './Pages/Sobre';
import Form from './Pages/Form';
import Footer from './Pages/Footer';

import Return from "./Components/Interfaces/Return"

const App = () => {
  return (
    <>
      <Header/>
        <div>Componentes 🔥</div>
        <Sobre/>
        <Form/>
        <Return/>
      <Footer/>
    </>
  );
};

export default App;
