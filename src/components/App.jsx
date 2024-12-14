import React from 'react'
import Title from './Title'
import './App.css'
import ProgressBar from './ProgressBar'
import ControlsBar from './ControlsBar'

const App = () => {
  return (
    <div className='app'>
      <div>
        <Title title="title" subtitle="subtitle" />
        <ProgressBar />
        <ControlsBar />
      </div>
    </div>
  )
}

export default App