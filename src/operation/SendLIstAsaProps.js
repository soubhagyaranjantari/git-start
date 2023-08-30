import React from 'react'
import SendLIstAsaProps1 from'./SendLIstAsaProps1'
export const SendLIstAsaProps = () => {
    const details = [
        { name: 'Anil', email: 'Anil@test.com', contact: 12345 },
        { name: 'Kanhu', email: 'Kanhu@test.com', contact: 12345 },
        { name: 'Sam', email: 'Sam@test.com', contact: 12345 },
        { name: 'Peter', email: 'Peter@test.com', contact: 12345 },
    ]
    function showNmae(e) {
        alert('Welcome' + " " + e)
    }
  return (
    <div>
        <h1 className="text-center">Send LIst As A Props</h1>

        {
            details.map((item)=>
            <SendLIstAsaProps1 key={item.name} item={item} showNmae={showNmae} />
            )
        }

    </div>
  )
}
