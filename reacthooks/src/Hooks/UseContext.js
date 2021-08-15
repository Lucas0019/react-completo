import React from "react"
import Product from "../Components/Product";
import UserContext from "../Components/UserContext"

function App() {

  // O método Provider deve ser utilizado para envolver todos os elementos que 
  // terão acesso aos dados do Context. Provider recebe uma propriedade chamada value, 
  // dentro dela que devemos informar os dados do contexto.
  
  return (  
    <UserContext.Provider value={{nome: 'Lucas'}}>
      <Product/>
    </UserContext.Provider>
  );
}

export default App;
