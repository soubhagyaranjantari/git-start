import React from 'react'
import './Method.css'
import PostMethodApi from './PostMethodApi'
import { Table, Button } from 'react-bootstrap'
import PrefilledForm from './PrefilledForm'
const DeleteMethod = () => {
    const [user, setUser] = React.useState([])
    const [updatedStatus, setupdatedStatus] = React.useState(false)
    React.useEffect(() => {
        // Your Code Here to fetch data and set state
        getUserData()
    }, [updatedStatus])
    // console.log(user);
    const [userData1, setUserData1] = React.useState()
    const [userData, setUserData] = React.useState({
        name: '',
        email: '',
        phone: "",
        id: ""
    })
    const { name, email, phone } = userData
    const getUserData = () => {
        fetch('http://localhost:4000/mydata').then((result) =>
            result.json().then(((resolve) => {
                setUser(resolve)

                setUserData1(resolve[0])
                // setUserData({ ...userData, name: resolve[0].name })
                // setUserData({ ...userData, email: resolve[0].email })
                // setUserData({ ...userData, phone: resolve[0].phone })
            })
            ))
    }

    const deletedata = (para) => {
        fetch(`http://localhost:4000/mydata/${para}`, {
            method: 'DELETE'
        }).then((reasult) => {
            reasult.json().then((response) => {
                getUserData()
                // alert(para)
            })
        })
    }
// {___________________________________________________________________________________________________________________}
    function selectUser(item) {
        console.log("selecteduser", item)
        setUserData1(item)
        setUserData({ ...userData, id:item.id })
        // setUserData({ ...userData, name: user[id-1].name })
        // setUserData({ ...userData, email: user[id-1].email })
        // setUserData({ ...userData, phone: user[id-1].phone })
    }
    const updateData = (e) => {
        setUserData1()
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const updateUser = (userData1) => {
        const { name, email, phone, id } = userData1
        console.log("isdhhbsdlkh.", name, email, phone, id,userData1);
        fetch(`http://localhost:4000/mydata/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        setupdatedStatus(!updatedStatus)
    }
    return (
        <div className="all-two">
            <PostMethodApi save={deletedata} />
            <div>
                <h5>
                    This is the delete method page.
                    You can add your code here for deleting a resource in this component.</h5>
                <div className="text-center ">
                    <Table striped bordered hover variant="primary" size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Operation</th>
                                <th>Fill Form</th>
                            </tr>
                        </thead>
                        <tbody border="1">
                            {
                                user.map((item) => {
                                    return <tr key={item.id}>
                                        <td >{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>< Button size="sm" variant='danger' type="submit" onClick={() => deletedata(item.id)}>Delete</Button></td>
                                        <td>< Button size="sm" variant='success' type="submit" onClick={() => selectUser(item)}>Update</Button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>

                </div>
            </div >

            <div>
                <h1>PrefilledForm</h1>
                <div>
                    <input type="text" name='name' value={userData1?.name || name} onChange={updateData} /><br /><br />
                    <input type="text" name='email' value={userData1?.email || email} onChange={updateData} /><br /><br />
                    <input type="text" name='phone' value={userData1?.phone || phone} onChange={updateData} /><br /><br />
                    <Button onClick={() => updateUser(userData1 ? userData1 : userData)}>update</Button>
                </div>
            </div>
        </div>
    )
}

export default DeleteMethod