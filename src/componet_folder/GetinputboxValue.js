import React, { useState } from 'react'

export const GetinputboxValue = () => {
    const [first, setfirst] = useState(null)
    const[print,setprint]=useState(false)
    function getData(val) {
        console.log(val.target.value);
        setfirst(val.target.value)
        setprint(false)
    }
  return (
    <div>
        <h1 className="text-danger">Get input value</h1>
        {
            print?
            <h1 className="text-success">{first}</h1>
            :null
        }
        <input type="text" onChange={getData} />
        <button className="btn btn-primary" onClick={()=>setprint(true)}>Print Data</button>
    </div>
  )
}
