import React from 'react'
import  ForwardRefChild  from './ForwardRefChild';

export const ForwadRefParent = () => {
    let inputRef=React.useRef(null)
    function handleInput() {
        console.log('function work');
        inputRef.current.value=10000
        inputRef.current.focus()
        inputRef.current.style.color='green'
        inputRef.current.style.backgroundColor='aqua'
    }

  return (
    <div>
        <h1>ForwadRefParent</h1>
        <ForwardRefChild ref={inputRef}/>
        <button className="btn btn-secondary" onClick={()=>handleInput()}>handle iNput In Child</button>
    </div>
  )
}
