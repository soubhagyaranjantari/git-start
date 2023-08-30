import React from 'react'

const MapFunction = () => {
    const student = [
        'anil', 'kanhu', "Sam", "peter"
    ]
    const data = [
        { name: 'Anil', email: 'Anil@test.com', contact: 12345 },
        { name: 'Kanhu', email: 'Kanhu@test.com', contact: 12345 },
        { name: 'Sam', email: 'Sam@test.com', contact: 12345 },
        { name: 'Peter', email: 'Peter@test.com', contact: 12345 },
    ]
    return (
        <div>
            {/* {
                student.map((name)=>
                <h1>Name Is : {name}</h1>
                )
            } */}
            <div>
                <table border="1">
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                    {
                        data.map((imfo) =>
                            <tr key={imfo.email}>
                                <td>{imfo.name}</td>
                                <td>{imfo.email}</td>
                                <td>{imfo.contact}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )

}
export default MapFunction;