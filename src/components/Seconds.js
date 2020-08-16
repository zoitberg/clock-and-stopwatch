import React from 'react';

class Seconds extends React.Component {
    constructor(props) {
        super(props);

        this._isMounted = false; 
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
            
            if(!secondSpan) {
                return null;
            }
              secondSpan.animate([
                {opacity: 0}, 
                {opacity: 1}
            ], {duration: 500, iterations: 1});  

            this._isMounted && this.setState({
                seconds: seconds
            });
    }

    componentDidMount() {
        this._isMounted = true;
            setInterval(() => {
                this.getSeconds();
            }, 1000);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    

    render() {
        return (
            <span className='secondSpan'>{this.state.seconds}</span>
        )
    }
}

export default Seconds; 