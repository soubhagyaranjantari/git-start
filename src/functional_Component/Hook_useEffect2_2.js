import React from 'react'

export const Hook_useEffect2_2 = (props) => {
    React.useEffect(()=>{
        // console.log('count will be show');
    },[props.count])

    React.useEffect(()=>{
        // console.log('data will be trigger');
    },[props.data])
  return (
    <div>
        <h1 className="text-warning">Hook_useEffect2_2</h1>
        <h1 className="text-primary">Count : {props.count}</h1>
        <h1 className="text-danger">Data : {props.data}</h1>
    </div>
  )
}
