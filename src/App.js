import './App.css';
import React, { useState} from 'react'
// import Button from './components/Button'
import Counter from './components/Counter'
// import AddressForm from './components/AddressForm'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <button onClick={() => setVisible(!visible)}>Show/Hide</button>
      <p>Counter</p>
      { visible && <Counter />}
    </>
  )
}

export default App;
