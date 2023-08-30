import React, { useEffect, useRef } from 'react'
import GetPreviousPropsChild from './GetPreviousPropsChild';
import { Button } from 'react-bootstrap';

const GetPreviousProps = (props) => {
    const [count, setCount] = React.useState(0)
    return (
        <div className='text-center' style={{ backgroundColor: "rgb(179, 212, 161)", color: 'red' }}>
            <h1>GetPreviousProps</h1>
            <GetPreviousPropsChild count={count} />
            <Button variant='warning' onClick={() => setCount(Math.floor(Math.random() * 10))}>Update Value</Button>
        </div>
    )
}

export default GetPreviousProps;