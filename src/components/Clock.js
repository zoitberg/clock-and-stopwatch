import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                hours: '',
                minutes: '',
                seconds: '',
                currentDate: ''
            }
            this.getTime = this.getTime.bind(this);
            this.getDate = this.getDate.bind(this);
    }
       getTime() {
        const date = new Date(); 
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
        const currentDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;

            this.setState({
                hours: hours,
                minutes: minutes, 
                seconds: seconds,
                currentDate: currentDate
            });
       }

       // getting date
       getDate() {
           const monthsAndDays = {
               months: [],
               weekDays: []
           };


       }

       componentDidMount() {
           setInterval(() => {
                this.getTime();
            }, 1000)
       }

    render() {
        

        return (
            <time>
                {this.state.currentDate} <br/>
               {`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}
            </time>
        )
    }
}

export default Clock;