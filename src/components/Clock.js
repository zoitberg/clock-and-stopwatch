import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                hours: 1,
                minutes: 2,
                seconds: 3
            }
            this.getTime = this.getTime.bind(this);
    }
       getTime() {
        const date = new Date(); 
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
            this.setState({
                hours: hours,
                minutes: minutes, 
                seconds: seconds
            });
       }

       componentDidMount() {
           setInterval(() => {
                this.getTime();
            }, 1000)
       }

    render() {
        

        return (
            <time>
               {`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}
            </time>
        )
    }
}

export default Clock;