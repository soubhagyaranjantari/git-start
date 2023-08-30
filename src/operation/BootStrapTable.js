import React from 'react'
import { Table } from 'react-bootstrap'
export const BootStrapTable = () => {
    const data = [
        { name: 'Anil', email: 'Anil@test.com', contact: 123 },
        { name: 'Kanhu', email: 'Kanhu@test.com', contact: 12345 },
        { name: 'Sam', email: 'Sam@test.com', contact: 123 },
        { name: 'Peter', email: 'Peter@test.com', contact: 12345 },
        { name: 'Pet', email: 'Pet@test.com', contact: 123456789 },
    ]
    return (
        <div>
            <h1 className='text-center'>React BootStrapTable</h1>

            <Table striped variant='dark' bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((item, index) =>
                            item.contact === 123 ?
                                <tr key={item.email}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                </tr> : null
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}
