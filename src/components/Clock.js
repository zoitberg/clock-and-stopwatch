import React from 'react';
import '../App.css';

import Hours from './Hours.js';
import Minutes from './Minutes.js';
import Seconds from './Seconds.js';

class Clock extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                seconds: '',
                currentDate: ''
            }
            this.getDate = this.getDate.bind(this);
    }


       getDate() {
           const monthsAndDays = {
               'months': ["January", "February", "March", "April", "May", "June", "July", "August", "September",
                "October", "November", "December"],
               'weekDays': ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
           };
           const date = new Date();
           const currentDate = `${date.getDate()} ${monthsAndDays["weekDays"][date.getDay()]} / 
                                 ${monthsAndDays["months"][date.getMonth()]} / ${date.getFullYear()}`;
  
                this.setState({
                        currentDate: currentDate
                });
       }


       componentDidMount() {
                this.getDate();
            setInterval(() => {
                this.getDate();
            }, 43200000);
       }

    render() {
        return (
            <div className="timeAndDate-container">
                <time className="date-element">{this.state.currentDate} </time>
                <time className="time-element">
                    <Hours/>
                    <Minutes/>  
                    <Seconds/>       
                </time>
                
            </div>
        )
    }
}

export default Clock;