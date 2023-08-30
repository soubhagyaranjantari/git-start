import React, { useState } from 'react'
import './Method.css'
// import DeleteMethod from './DeleteMethod';
const PostMethodApi = (props) => {
    const [field, setField] = useState({
        name: "",
        email: "",
        phone: "",
    })
    // React.useEffect(()=>{
    //     props.save()
    // },[])
    const { name, email, phone } = field;
    const handleChange = e => {
                const { name, value } = e.target
            setField({ ...field, [name]: value })
    }
    const handleForm = () => {
         props.save()

        let details = { name, email, phone };
        fetch("http://localhost:4000/mydata", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        }).then((reasult) => {
            console.log("reasult", reasult);
            reasult.json().then((response) => {
                console.warn('response', response);
            })
        })
        props.save()
    }
    return (
        <div className="all-two">
            <div>
                <h1>PostMethodApi</h1>
                <div className="container">
                    <input type="text" value={field.name} name='name' onChange={handleChange} placeholder='name' /><br /><br />
                    <input type="text" value={email} name='email' onChange={handleChange} placeholder='email' /><br /><br />
                    <input type="text" value={phone} name='phone' onChange={handleChange} placeholder='phone' /><br /><br />
                    <button className="btn btn-primary" onClick={handleForm}>Save()</button>
                </div>
            </div>
            {/* <DeleteMethod /> */}
        </div>
    )
}

export default PostMethodApi