import React from 'react';
import './App.css';
import Characters from './components/Characters.component';
import Header from './components/Header.component';

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo!</h1>
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;
