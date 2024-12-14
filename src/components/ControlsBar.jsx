import React from 'react'
import './ControlsBar.css'
import Control from './controls/Control'
import PreviousControl from './controls/PreviousControl'
import PlayControl from './controls/PlayControl'
import NextControl from './controls/NextControl'
import ShuffleControl from './controls/ShuffleControl'


const ControlsBar = () => {
  return (
    <div className='control-bar'>
      <PreviousControl />
      <PlayControl />
      <NextControl />
      <ShuffleControl />
    </div>
  )
}

export default ControlsBar