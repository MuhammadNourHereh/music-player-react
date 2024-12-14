import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const PlayControl = () => {
    return (
        <div className='control'>
            <FontAwesomeIcon icon={faPlay} />
        </div>
    )
}

export default PlayControl