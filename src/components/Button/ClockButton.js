import React from 'react'

const ClockButton = props => {
    return (
        <button className='btn btn-primary ClockButton' onClick={props.switch}>
            CLOCK
        </button>
    )
}

export default ClockButton