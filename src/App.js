import './App.css';
import React from 'react'
import Button from './components/Button'

function App() {
  return (
    <>
      <p>Button using useState</p>
      <Button
        active="ON"
        inactive="OFF"
      />
    </>
  )
}

export default App;
