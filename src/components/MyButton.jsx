import React from 'react'


function MyButton() {
  
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <div>
      <button onClick={handleClick}>MyButton</button>
    </div>
  )
}

export default MyButton
