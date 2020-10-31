import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  const handleClickIncrease = () => setCount(count + 1)
  const handleClickDecrease = () => setCount(count - 1)
  const handleClickReset = () => setCount(0)

  return(
    <>
      <button onClick={handleClickIncrease}>Increase</button>
      <button onClick={handleClickDecrease}>Decrease</button>
      <button onClick={handleClickReset}>Reset</button>
      <h3>{ count }</h3>
    </>
  )
}
