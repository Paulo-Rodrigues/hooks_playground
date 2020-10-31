import './App.css';
import React from 'react'
import Button from './components/Button'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <p>Button using useState</p>
      <Button
        active="ON"
        inactive="OFF"
      />

      <p>Counter</p>
      <Counter />
    </>
  )
}

export default App;
