import React from 'react'
import { useCount, useIncrement, useDecrement } from '../store/Count'

const Counter = () => {
  const count = useCount()
  const increment = useIncrement()
  const decrement = useDecrement()

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

export default Counter
