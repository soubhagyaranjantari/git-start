import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const CallGetApi = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>
        result.json().then(((resolve)=>
        // console.log(resolve)
        setData(resolve)
        )))
    },[])
    console.log(data);
  return (
    <div className='container'>
        <h1>CallGetApi</h1>
            {
                data.map((item,index)=>
        <div key={item.id}>
                <h3 className='text-warning'> User Id Is : {item.id}</h3>
                <h5 className='text-primary'> Title Is : {item.title}</h5>
                <h6 className='text-secondary'> Body  Is : {item.body}</h6>
        </div>
                )
            }
    </div>
  )
}
 
export default CallGetApi;