import React from 'react';
import Item from './Item';
import Limpar from './Limpar'

import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Item />
      <Limpar/>
    </GlobalStorage>
  );
};

export default App;
