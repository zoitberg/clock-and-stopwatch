import React from 'react';

class Seconds extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                seconds: ''
            }
            this.getSeconds = this.getSeconds.bind(this);
    }

    getSeconds() {  
        const date = new Date();
        const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` 
                        : date.getSeconds();
        const secondSpan = document.querySelector('.secondSpan');
                       // console.log(`previousVal: ${this.state.seconds} curVal: ${seconds}`)                    
              secondSpan.animate([
                {opacity: 0}, 
                {opacity: 1}
            ], {duration: 500, iterations: 1});  

            this.setState({
                seconds: seconds
            });
    }

    componentDidMount() {
        setInterval(() => {
            this.getSeconds();
        }, 1000);
    }

    render() {
        return (
            <span className='secondSpan'>{this.state.seconds}</span>
        )
    }
}

export default Seconds; 