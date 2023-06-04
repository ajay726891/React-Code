import React from 'react'

function Eventhandling() {
   function eventHandler()
    {
        console.log('Button Clicked')
    }
  return (
    <div>
      <button onClick={eventHandler}>ClickMe</button>
    </div>
  )
}

export default Eventhandling