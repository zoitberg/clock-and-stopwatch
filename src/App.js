import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.js';
import SwitchButton from './components/Button/SwitchButton.js';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple Clock App</h1>
        </header>  
          <main className="Time-container"> 
            <Card style={{ backgroundColor: 'rgba(0,0,0,0.3)', 
            color: 'white', border: '0px' }}>
              <Card.Body>
                <Card.Title>Current time and date</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Check time in your zone </Card.Subtitle>
                  <Card.Text>
                    <Clock />
                  </Card.Text>
                <SwitchButton switch={this.triggerSwitch}/>
              </Card.Body>
            </Card>
            <img src={logo} className="App-logo" alt="logo" /> 
          </main>   
        <footer>
            by W.
        </footer>
      </div>
    );
  }
}

export default App;
