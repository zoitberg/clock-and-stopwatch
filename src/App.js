import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.js'

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const timeNow = Date.parse(new Date());
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Clock App</h1>
      </header>  
        <main className="Time-container"> 
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Current time and date</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Check time in your zone </Card.Subtitle>
              <Card.Text>
                <Clock />
              </Card.Text>
              <Card.Link href="#">UTC TIME</Card.Link>
              <Card.Link href="#">GMT TIME</Card.Link>
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
