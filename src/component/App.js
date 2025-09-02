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
import Form from './form/Form.js';
import Range from './range/Range.js';
import Posts from './posts/Posts.js';
import Post from './post/Post.js';


class App extends React.Component {

  state =
  {
  posts:
  [
    { id: "1", title: "Процедурное программирование на языке с++", content: "Изучается базовое конструкции языка С++" },
    { id: "2", title: "Процедурное программирование на языке с++", content: "Изучается базовое конструкции языка С++" },
    { id: "3", title: "Процедурное программирование на языке с++", content: "Изучается базовое конструкции языка С++" }

  ]
}

render()
{
  return (
    <div className="App">
      <Header />
      {/* <Hello />
      <Length />
      <DecimalToBinary />
      <DecimalToHex />
      <BinaryToDecimal />
      <HexToDecimal />
      <Form />
      <Range /> */}
      {typeof (this.state.posts)};
      <Posts posts={this.state.posts} />
    </div>
  );
}

}

export default App;
