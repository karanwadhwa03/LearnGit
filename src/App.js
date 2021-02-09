import React from 'react'
import Child from './Child'
import GlobalState from './Context/GlobalState'

export default function App() {
  return (
    <div>
      <GlobalState>
        <h1>BUTTON TASK WIITH CONTEXT API HOOKS</h1>
        <Child></Child>
      </GlobalState>
    </div>
  )
}
