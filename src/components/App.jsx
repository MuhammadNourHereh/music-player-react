import React from 'react'
import Title from './Title'
import ProgressBar from './ProgressBar'
import ControlsBar from './ControlsBar'

const App = () => {
  return (
    <div>
      <Title title="title" subtitle="subtitle"/>
      <ProgressBar />
      <ControlsBar />
    </div>
  )
}

export default App