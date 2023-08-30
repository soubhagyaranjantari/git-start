import React from 'react'

export const UnControlledComponent = () => {
  let inputRef1=React.useRef(null)
  let inputRef2=React.useRef(null)

  function handleSubmit(e){
    e.preventDefault();
    console.log('Input Box 1 Value is : ',inputRef1.current.value);
    console.log('Input Box 2 Value is : ',inputRef2.current.value);
    let input3=document.getElementById('input3').value
    console.log('Input Box 2 Value is : ',input3);
  }

  return (
    <div>
        <h1 className='text-danger'>UnControlledComponent</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef1}/><br /><br />
        <input type="text" ref={inputRef2} /><br /><br />
        <input id='input3' type="text" /><br /><br />
        <button className="btn btn-info">unContolll Component</button>
        </form>
    </div>
  )
}
