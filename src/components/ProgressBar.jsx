import React, { useContext } from 'react'
import { AudioContext } from '../AudioContext'
import { formatTime } from '../utils'

const ProgressBar = () => {
    const { duration, currentTime, seekAudio } = useContext(AudioContext)
    const handleSeek = (e) => {
        const newTime = e.target.value;
        seekAudio(Number(newTime));
    };

    return (
        <div>
            <span>{formatTime(currentTime)}</span>
            <input type="range" min='0'
                max={duration} value={currentTime}
                step="0.1"
                onChange={handleSeek} />
            <span>{formatTime(duration)}</span>
        </div>
    )
}

export default ProgressBar