import React from 'react'
import Pen from './Class_component';

const User = () => {
    const data=true
    return (
        <div className="first">
            <Pen data={data}/>
            <h1 className='text-center text-primary'>Soubhagya Ranjan Tarai</h1>
        </div>
    )
}

export default User;