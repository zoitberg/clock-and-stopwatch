import React from 'react';

import ListComponent from './ListComponent';

class StopwatchContainer extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
               min: 0, 
               sec: 0,
               msec: 0
            }

            this._isMounted = false;

            this.lapArr = [];
            this.interval = null;
    };

  
    handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            }, 
            () => this.handleStart()
        );
    };

    handleLap = (min, sec, msec) => {
        this.lapArr = [
            ...this.lapArr, 
            {min, sec, msec}
        ]
    }

    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0, 
                        sec: this.state.sec + 1
                    }) 
                } else {
                    this.setState({
                        msec: 0, 
                        sec: 0, 
                        min: this.state.min + 1
                    })
                };
            }, 1);
        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
        this.setState({
            min: 0, 
            sec: 0, 
            msec: 0,

            start: false
        });

        clearInterval(this.interval);

        this.lapArr = [];
    };

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
      let padToTwo = (number) => (number <= 9 ? `0${number}`: number);  
        return(
            <div>
                <div className='Stopwatch-container'>
                    <p>{padToTwo(this.state.min) + ' : '}</p> 
                    <p>{padToTwo(this.state.sec) + ' : '}</p>   
                    <p>{padToTwo(this.state.msec)}</p>
                </div>
                <div className='List-container'>
                    <ListComponent lap={this.lapArr} />
                </div>
                <div className='Button-container'>
                    <button className="btn btn-success" onClick={this.handleToggle}>{!this.state.start ? 'Start' : 'Stop'}</button>
                    <button className="btn btn-warning" onClick={()=>this.handleLap(this.state.min, this.state.sec, this.state.msec)} disabled={!this.state.start}>Lap Time</button>
                    <button className="btn btn-danger" onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default StopwatchContainer;