import React from 'react';
//import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';
import Length from './length/Length.js';
import DecimalToBinary from './function/DecimalToBinary.js';
import DecimalToHex from './function/DecimalToHex.js';
import BinaryToDecimal from './function/BinaryToDecimal.js';
import HexToDecimal from './function/HexToDecimal.js';


class App extends React.Component {
render() {
  return (
    <div className="App">
      <Header />
      <Hello />
      <Length />
     <DecimalToBinary />
      <DecimalToHex />
      <BinaryToDecimal />
      <HexToDecimal />
    </div>
  );
}
}

export default App;
