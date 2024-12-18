import React, { useContext } from 'react'
import './Title.css'
import { AudioContext } from '/src/AudioContext.jsx';

const Title = () => {
    const { title, subtitle } = useContext(AudioContext)
    return (
        <>
            <span className='title'>{title}</span><br />
            <span className='subtitle'>{subtitle}</span>
        </>
    )
}

export default Title