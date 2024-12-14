import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Control.css'

const ShuffleControl = () => {
    return (
        <div className='control'>
            <FontAwesomeIcon icon={faShuffle} />
        </div>
    )
}

export default ShuffleControl