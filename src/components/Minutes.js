import React from 'react';


class Minutes extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                minutes: ''
            }
            this.getMinutes = this.getMinutes.bind(this);
    }

    getMinutes() {
        const date = new Date();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` 
                        : date.getMinutes();
        const minuteSpan = document.querySelector('.minuteSpan');     
 
            if(this.state.minutes != minutes) {
                minuteSpan.animate([
                    {opacity: 0}, 
                    {opacity: 1}
                ], {duration: 500, iterations: 1});
            }
            
        this.setState({
            minutes: minutes
        });
           
    }

    componentDidMount() {
        setInterval(() => {
             this.getMinutes();
         }, 1000);
    } 
 
    render() {
        return (
            <span className='minuteSpan'>{`${this.state.minutes}:`}</span>
        )
    }
}

export default Minutes;