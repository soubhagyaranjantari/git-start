import React,{forwardRef} from 'react'

const ForwardRefChild = (props,ref) => {
    return (
        <div>
            <h1>ForwardRefChild</h1>
            <input type="text" ref={ref}/>
        </div>
      )
}

export default forwardRef(ForwardRefChild);