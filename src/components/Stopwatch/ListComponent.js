import React from 'react';


class ListComponent extends React.Component {
 
  
    render() {
        let padToTwo = (number) => (number <= 9 ? `0${number}` : number);
        let data = this.props.lap;
            return (
                <div className='list-element'>
                    {data.map((i, idx) => <div key={idx}>{padToTwo(i.min)}:{padToTwo(i.sec)}:{padToTwo(i.msec)}</div>)} 
                </div>
            )
    }

}

export default ListComponent;