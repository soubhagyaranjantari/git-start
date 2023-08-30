import React from 'react'

const PrefilledForm = (props) => {
    // const [user, setUser] = React.useState([])
    const [userData, setUserData] = React.useState({
        name: '',
        email: '',
        phone: ""
    })
    const { name, email, phone } = userData
    console.log(props.userDetails);
    function manage(params) {
        // setUserData({ ...userData, name: props.userDetails[0].userName })
        // setUserData({ ...userData, email: props.userDetails[0].email })
        // setUserData({ ...userData, phone: props.userDetails[0].phone })
        console.log(name);
    }
    manage()
    return (
        <div>
            <h1>PrefilledForm</h1>
            <div>
                {/* <input type="text" value={name} /><br /><br /> */}
                {/* <input type="text" value={email}/><br /><br />
                <input type="text"value={phone} /><br /><br /> */}
            </div>
        </div>

    )
}

export default PrefilledForm;