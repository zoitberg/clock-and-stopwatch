import React from 'react';

const StartButton = props => {
    return (
        <button className="btn btn-success" onClick={props.handler}>
            START
        </button> 
    )
}

export default StartButton;