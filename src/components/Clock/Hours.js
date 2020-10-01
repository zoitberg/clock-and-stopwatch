import React from 'react';

class Hours extends React.Component {
    constructor(props) {
        super(props);

        this._isMounted = false;
            this.state = {
                hours: 0
            }
        this.getHours = this.getHours.bind(this);    
    }


    getHours() {
        const date = new Date();
        const hours = date.getHours() < 10 ? 
                        `0${date.getHours()}` : date.getHours();
        const hourSpan = document.querySelector('.hourSpan');     
          
        if(this._isMounted) {
            if(this.state.hours !== hours) {
                hourSpan.animate([
                    {opacity: 0}, 
                    {opacity: 1}
                ], {duration: 500, iterations: 1});
            }

            this.setState({
                hours: hours
            });
        }                
    }

    componentDidMount() {
        this._isMounted = true;
            setInterval(() => {
                this.getHours();
            }, 1000);
    } 

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <span className='hourSpan'>{`${this.state.hours}:`}</span>
        )
    }
}

export default Hours;

