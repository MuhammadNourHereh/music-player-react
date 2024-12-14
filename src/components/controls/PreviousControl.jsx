import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Control.css'

const PreviousControl = () => {
    return (
        <div className='control'>
            <FontAwesomeIcon icon={faBackward} />
        </div>
    )
}

export default PreviousControl