import React from 'react';


class ListComponent extends React.Component {
   

    render() {
        let padToTwo = (number) => (number <= 9 ? `0${number}` : number);
        let data = this.props.lap;
        return(
          /*  <div
              data={this.props.lap}
        renderItem={({item, index}) => <p key={index + 1}>{`#${index}         `}
             {padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}</p>}
             >
                
            </div>*/
            <div>
                {data.map(i => <div>{padToTwo(i.min)}:{padToTwo(i.sec)}:{padToTwo(i.msec)}</div>)} 
            </div>
        )
    }

}

export default ListComponent;