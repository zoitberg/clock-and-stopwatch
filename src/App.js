import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The current time is: </h1>
        <time></time>
        <img src={logo} className="App-logo" alt="logo" />      
      </header>
    </div>
  );
}

export default App;
