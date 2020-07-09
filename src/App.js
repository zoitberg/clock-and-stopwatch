import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The current time is: </h1>
      </header>  
      <main className="Time-container">
        <time>{Date.parse(new Date())}</time>
        <img src={logo} className="App-logo" alt="logo" /> 
      </main>   
      <footer>
          kopyrajt orajt by W.
      </footer>
    </div>
  );
}

export default App;
