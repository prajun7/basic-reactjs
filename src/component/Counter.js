import React , { useState } from 'react'

function Counter() {
    const[counter, setCounter] = useState(0);

    const increment = () =>{
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
    <button onClick = {() => setCounter(prevCounter => prevCounter/2)} > Divide By 2 </button>

    </>
  )
}

export default Counter
