import React, { useState, useEffect } from "react"

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    document.title = `You clicked ${count} times`

    return () => {}
  }, [count])
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter
