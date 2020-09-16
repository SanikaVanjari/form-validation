import React from "react"
import "./App.css"
import Counter from "./Counter"
import Form from "./Form.js"

function App() {
  return (
    <div className="app">
      {/* <Form /> */}
      <Counter initialCount={0} />
    </div>
  )
}

export default App
