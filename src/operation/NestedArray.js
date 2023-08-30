import React from 'react'
import { Table } from "react-bootstrap";
export const NestedArray = () => {
    const Student = [
        {
            name: 'Soubhagya', email: 'Soubhagya@test.com', address: [
                { home: 'Odisha', city: 'BBSR', country: 'India' },
                { home: 'Odisha', city: 'BBSR', country: 'India' },
                { home: 'Odisha', city: 'BBSR', country: 'India' },
                { home: 'Odisha', city: 'BBSR', country: 'India' }
            ]
        },
        {
            name: 'anil', email: 'anil@test.com', address: [
                { home: 'Odisha', city: 'BBSR', country: 'India' },
                { home: 'Odisha', city: 'BBSR', country: 'India' },
                { home: 'Odisha', city: 'BBSR', country: 'India' },
                { home: 'Odisha', city: 'BBSR', country: 'India' }
            ]
        },
        {
            name: 'peter', email: 'peter@test.com', address: [
                { home: 'Odisha', city: 'BBSR', country: 'India' },
                { home: 'Odisha', city: 'BBSR', country: 'India' },
                { home: 'Odisha', city: 'BBSR', country: 'India' },
                { home: 'Odisha', city: 'BBSR', country: 'India' }
            ]
        }
    ]
    return (
        <div><h1 className="txt-center text-danger">
            NestedArray</h1>

            <Table variant='success' striped>
                <thead>
                    <tr>
                        <th>ADDRESS</th>    
                        <th>SL.No.</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Student.map((item, index) =>
                            <tr key={item.email}>
                                    <td>
                                        <Table variant='primary' striped>
                                            <tbody>
                                                {
                                                    item.address.map((data, sl) =>
                                                        <tr key={sl}>
                                                            <td>{data.home}</td>
                                                            <td>{data.city}</td>
                                                            <td>{data.country}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </td>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}
