import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react'
import { AudioContext } from '../../AudioContext';

const PlayControl = () => {
    const { playAudio, pauseAudio } = useContext(AudioContext)
    const [playing, setPlaying] = useState(true)
    const [icon, setIcon] = useState(faPlay)
    
    const playPuase = () => {
        if (playing) {
            setPlaying(false)
            playAudio()
            setIcon(faPause)
        }
        else {
            setPlaying(true)
            pauseAudio()
            setIcon(faPlay)
        }
    }

    return (
        <div className='control'>
            <FontAwesomeIcon icon={icon} onClick={playPuase} />
        </div>
    )
}

export default PlayControl