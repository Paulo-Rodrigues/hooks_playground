import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  const handleClickIncrease = () => setCount(count + 1)
  const handleClickDecrease = () => setCount(count - 1)
  const handleClickReset = () => setCount(0)

  const [color, setColor] = useState('salmon');
  const changeColor = () => {
    const nextColor = color === 'salmon' ? 'gold' : 'salmon';
    setColor(nextColor);
  }

  useEffect(() => {
    console.log(`inside useEffect count`)

    return () => {
      console.log(`Unmounting. Im removing what seup above last count`)
    }
  },[color]);

  return(
    <>
      <button onClick={handleClickIncrease}>Increase</button>
      <button onClick={handleClickDecrease}>Decrease</button>
      <button onClick={handleClickReset}>Reset</button>
      <button onClick={changeColor}>Color</button>
      <h3 style={{ color }}>{ count }</h3>
    </>
  )
}
