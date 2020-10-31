import React, { useState } from 'react'

export default function Button(props) {
  const [activated, setActivated] = useState(false)
  const btnText = activated ? props.active : props.inactive

  function onClickHandler() {
    setActivated(!activated)
  }

  return (
    <button onClick={onClickHandler}>
      { btnText }
    </button>
  )
}
