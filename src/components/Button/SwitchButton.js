import React from 'react'

const switchButton = props => {
    return (
        <button className='btn btn-primary switchButton' onClick={props.switch}>
            STOPWATCH
        </button>
    )
}

export default switchButton;