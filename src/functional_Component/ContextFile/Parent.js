import React, { createContext } from 'react'
import Child from './Child'
import OtherChild from './OtherChild'
export const GlobalInfo = createContext()
const Parent = () => {
    const [color, setColor] = React.useState('red')
    const [name, setName] = React.useState("Kanhu")
    const getName=(getname)=>{
        console.log("getName",getName) // this function will be called when child component is rendered in parent
        setName(getname)
    }
    return (
        <GlobalInfo.Provider value={{ appColor: color, getName:getName}}>
            <div>
                <h1 style={{ backgroundColor: 'blueviolet' }}>Parent</h1>
                <h1>My Name is {name}</h1>
                <h3 className='d-flex justify-content-center'>Child : <Child /></h3>
                <h3 className='d-flex'>OtherChild : <OtherChild /></h3>
            </div>
        </GlobalInfo.Provider>
    )
}

export default Parent