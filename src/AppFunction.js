import React, {useState, useEffect} from 'react'

const AppFunction = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false)



  useEffect(() => {
    document.title = `You have clicked ${count} times`
  })

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }


  return (
    <>
    <h2>Functional Counter</h2>
    <button onClick={incrementCount}>
      I was clicked {count} times with useState
    </button>
    <h2>Toogle Light</h2>
      <img
        src={
          isOn
          ? "https://icon.now.sh/highlight/fd0"
          : "https://icon.now.sh/highlight/aaa"
        } 
        style={{
        height: "50px",
        width: "50px",
        
      }}
      alt="Flashlight"
      onClick={toggleLight}
      />



    </>
  )
}

export default AppFunction
