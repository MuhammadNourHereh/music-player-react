import { faBackwardFast, faForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { AudioContext } from '../../AudioContext'

const PreviousControl = () => {
  const {previousTrack} = useContext(AudioContext)
  return (
    <div className='control'>
      <FontAwesomeIcon icon={faBackwardFast} onClick={previousTrack}/>
    </div>
  )
}

export default PreviousControl