import './App.css';
import React from 'react';
import Count from './features/counter/counter';
import Coin from './features/Coin/Coin';
import Theme from './features/theme/theme';

function App() {
  return (
    <div className="App">
      <Count />
      <Coin />
      <Theme />
    </div>
  );
}

export default App;
