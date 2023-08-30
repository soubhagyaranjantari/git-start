import React from 'react'

const Center = () => {
    const data = [
        {
            name: "anil",
            age: 23,
            place: "bangalore"
        },
        {
            name: "sunil",
            age: 20,
            place: "bangalore"
        },
        {
            name: "sssssss",
            age: 24,
            place: "bangalore"
        },
        
    ]

    // const newData=data.map((abc,ind,a)=>{
    //     console.log(abc.name,ind);
    // })

    const new2=data.filter((word)=>{
      if  (word.age<=23){
        // console.log(word.name);
      }
    });
        // console.log(new2);

    const handelChange = (val) => {
        // console.log(val);
    }

    return (
        <div className="cent">
            <form action="">
                <label htmlFor="Name">Name:</label>
                <input id="Name" type="text" placeholder="Name" required onChange={handelChange} /><br />
                <label htmlFor="Password">Password:</label>
                <input type="password" id="Password" placeholder="Password" onChange={handelChange} /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Center;