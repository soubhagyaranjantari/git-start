import React, { useState } from "react";
import "./hookscss.css"
import { Button } from "react-bootstrap";

const Hooks1 = () => {
    const [data, setData] = useState('KaNhU')

    const setName = () => {
        if (data == 'KaNhU') {
            setData('Soubhagya')
        } else {
            setData('KaNhU')
        }
    }
    return (
        <div className="text-center ">
            <h1 className="text-center text-weight-bold">{data}</h1>
            <button className="btn btn-warning" onClick={() => setName()}>Set Data To {data == 'KaNhU' ? "Soubhagya" : 'KaNhU'}</button>
            <hr />
            <Button className="bg-info">click</Button>
        </div>
    )
}

export default Hooks1;