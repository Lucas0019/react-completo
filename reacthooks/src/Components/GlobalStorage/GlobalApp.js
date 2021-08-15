import React from 'react';
import Item from './Item';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Item />
    </GlobalStorage>
  );
};

export default App;
