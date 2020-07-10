import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The current time is: </h1>
      </header>  
      <main className="Time-container">
        
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              <time className="Time-card">
                {Date.parse(new Date())}
              </time>
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <img src={logo} className="App-logo" alt="logo" /> 
      </main>   
      <footer>
          kopyrajt orajt by W.
      </footer>
    </div>
  );
}

export default App;
