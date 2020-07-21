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
        
            this.setState({
                hours: hours,
                minutes: minutes, 
                seconds: seconds
            });
       }

     
       getDate() {
           const monthsAndDays = {
               'months': ["January", "February", "March", "April", "May", "June", "July", "August", "September",
                "October", "November", "December"],
               'weekDays': ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
           };
           const date = new Date();
           const currentDate = `${monthsAndDays["weekDays"][date.getMonth() - 1]} / 
                                 ${monthsAndDays["months"][date.getMonth()]} / ${date.getFullYear()}`;

                this.setState({
                        currentDate: currentDate
                });
            console.log(monthsAndDays);
            console.log(monthsAndDays["months"][date.getMonth()])
 
       }

       componentDidMount() {
           setInterval(() => {
                this.getTime();
            }, 1000);
                this.getDate();
            setInterval(() => {
                this.getDate();
            }, 43200000);

       }

    render() {
        

        return (
            <div>
                <time>{this.state.currentDate} </time>
                <time>
                    {`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}
                </time>
            </div>
        )
    }
}

export default Clock;