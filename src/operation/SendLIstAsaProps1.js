import React from 'react'

const SendLIstAsaProps1 = (props) => {
    
    return (
        <div    >
            <h1 className="text-center"><span>Name : {props.item.name}</span>,<span>Email : {props.item.email}</span>,<span>Contact : {props.item.contact}</span><button className="btn btn-primary"
                onClick={() => props.showNmae(props.item.name)}>
                {props.item.name}
                </button></h1>


        </div>
    )
}

export default SendLIstAsaProps1;