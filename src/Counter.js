import React, { useState, useEffect } from "react"

function Counter({ initialCount }) {
  const [count, setCount] = useState(() => {
    // to get inital value only once, especially when there is complex calculation
    return initialCount
  })

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
