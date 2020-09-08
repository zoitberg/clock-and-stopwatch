import React from 'react';

const ResetButton = props => {
    return (
        <button className="btn btn-danger" onClick={props.handler}>
            RESET
        </button>
    )
}

export default ResetButton;