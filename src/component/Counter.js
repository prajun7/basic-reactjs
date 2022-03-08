import React , { useState } from 'react'

function Counter() {
    const[counter, setCounter] = useState(0);

    //Always get the prevCounter and then increment it
    //Here the setCounter is taking a function
    const increment = () => {
        return setCounter(prevCounter => prevCounter + 1);
    }

    const decrement = () => {
        return setCounter(prevCounter => prevCounter - 1);
    }

  return (
    <>
        <div>{counter}</div>
    <button onClick = {increment} > Increment </button>
    <button onClick = {decrement} > Decrement </button>

    {/* I am creating a function in this button itself */}
    <button onClick = {() => setCounter(prevCounter => prevCounter/2)} > Divide By 2 </button>

    </>
  )
}

export default Counter
