import React from 'react'
import { Link } from 'react-router-dom';

const DynamicRouting = () => {
    const users=[
        {id:1,name:'kanhu',email:'kanhu@test.com'},
        {id:2,name:'anil',email:'kanhu@test.com'},
        {id:3,name:'bruce',email:'kanhu@test.com'},
        {id:4,name:'peter',email:'kanhu@test.com'},
        {id:5,name:'sidhu',email:'kanhu@test.com'},
    ]
  return (
    <div>
        <h1>DynamicRouting</h1>
        {
            users.map((item,index)=>
            <h3 key={index}>
                <Link to={'/dynamic/'+item.id+'/'+item.name}>{item.name}</Link>
            </h3 >
            )
        }
        
    </div>
  )
}

export default DynamicRouting;