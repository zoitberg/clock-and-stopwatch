import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.js';
import StopwatchButton from './components/Button/StopwatchButton.js';
import ClockButton from './components/Button/ClockButton.js';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClockState: true
    }
  }

  triggerStopwatch = () => {
    this.setState({
      ...this.state,
      isClockState: false,
      isStopwatchState: true
    })
  }

  triggerClock = () => {
    this.setState({
      ...this.state, 
      isClockState: true, 
      isStopwatchState: false
    })
  }

  render() {
    return (
      <div>
        {
          this.state.isClockState && 
          
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
                  <StopwatchButton switch={this.triggerStopwatch} />
            <p>switched to clock</p>
              </Card.Body>
            </Card>
            <img src={logo} className="App-logo" alt="logo" /> 
          </main>   
        <footer>
            by W.
        </footer>
            
         </div>   
          }
          
        {
          this.state.isStopwatchState &&   
          <div>
              <ClockButton switch={this.triggerClock}/>
              <p>switched to stopwatch</p>
          </div>
        }

       
      </div>
    );
  }
}

export default App;
