import { faForwardFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { AudioContext } from '../../AudioContext'

const NextControl = () => {
  const {nextTrack} = useContext(AudioContext)
  return (
    <div className='control'>
      <FontAwesomeIcon icon={faForwardFast} onClick={nextTrack}/>
    </div>
  )
}

export default NextControl