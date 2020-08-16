import React from 'react'

const StopwatchButton = props => {
    return (
        <button className='btn btn-primary StopwatchButton' onClick={props.switch}>
            STOPWATCH
        </button>
    )
}

export default StopwatchButton;