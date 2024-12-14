import React from 'react'
import './Title.css'
const Title = ({ title, subtitle }) => {
    return (
        <>
            <span className='title'>{title}</span><br />
            <span className='subtitle'>subtitle</span>
        </>
    )
}

export default Title