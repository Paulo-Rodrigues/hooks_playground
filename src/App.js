import './App.css';
import React, { useState, createContext, useContext } from 'react'
// import Button from './components/Button'
// import Counter from './components/Counter'
// import AddressForm from './components/AddressForm'

// function App() {
//   const [visible, setVisible] = useState(false)
//   return (
//     <>
//       <button onClick={() => setVisible(!visible)}>Show/Hide</button>
//       <p>Counter</p>
//       { visible && <Counter />}
//     </>
//   )
// }

const NameContext = createContext()

function App() {
  const [name, setName] = useState('Billy')
  return (
    <NameContext.Provider value={name}>
      <Child />
    </NameContext.Provider>
  )
}

function Child() {
  return (
    <section>
      <Grandchild />
    </section>
  )
}

function Grandchild() {
  return (
    <div>
      <Button />
    </div>
  )
}

function Button() {
  const name = useContext(NameContext)
  return (
    <button>{name}</button>
  )
}

export default App;
