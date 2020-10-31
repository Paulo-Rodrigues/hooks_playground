import './App.css';
import React from 'react'
import Button from './components/Button'
import Counter from './components/Counter'
import AddressForm from './components/AddressForm'

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

      <h2>Address Form</h2>
      <AddressForm />
    </>
  )
}

export default App;
