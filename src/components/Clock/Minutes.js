import React from 'react';


class Minutes extends React.Component {
    constructor(props) {
        super(props);

        this._isMounted = false;
            this.state = {
                minutes: 0
            }
            this.getMinutes = this.getMinutes.bind(this);
    }

    
    getMinutes() {
        const date = new Date();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` 
                        : date.getMinutes();
        const minuteSpan = document.querySelector('.minuteSpan');     
        
          if(!minuteSpan) {
              return null;
          }

          if(this._isMounted) {
            if(this.state.minutes !== minutes) {
                minuteSpan.animate([
                    {opacity: 0}, 
                    {opacity: 1}
                ], {duration: 500, iterations: 1});
            }

            this.setState({
                minutes: minutes
            });
          }
    }

    componentDidMount() {
        this._isMounted = true;
                setInterval(() => {
                this.getMinutes();
            }, 1000);
    } 

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <span className='minuteSpan'>{`${this.state.minutes}:`}</span>
        )
    }
}

export default Minutes;