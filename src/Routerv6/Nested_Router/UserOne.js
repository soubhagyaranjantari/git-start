import React from 'react'
import {withRouter} from 'react-router-dom'
const UserOne = (props) => {
    // console.log(props.match.params.id);
  return (
    <div>
        <h1>User Id is {props.match.params.id}</h1>
        <h1>User is {props.match.params.name}</h1>
    </div>
  )
}

export default withRouter(UserOne);