import React, { useState } from 'react';
import CrosswordPuzzle from './components/CrosswordPuzzle'
import './styles/App.css'

function App() {

  return (
    <div className="App">
      <h1 className="header">Small Business Crossword</h1>
      <CrosswordPuzzle />
    </div>
  )
}  

export default App
