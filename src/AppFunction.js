import React, {useState} from 'react'

const AppFunction = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <button onClick={incrementCount}>
      I was clicked {count} times with useState
    </button>
  )
}

export default AppFunction
