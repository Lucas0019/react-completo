import React from 'react';

// O contexto irá permitir passarmos dados/estado a todos os componentes, 
// sem a necessidade de utilizar propriedades. Serve principalmente para 
// dodos/estados globais como por exemplo dados do usuário logado


const UserContext = React.createContext();

export default UserContext;
