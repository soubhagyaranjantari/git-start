import React,{useState} from 'react'

export const GetFormData = () => {
    const [name , setname] = useState("")
    const [movies , setmovies] = useState("")
    const [tnc , setTnc] = useState(false)

    function getDetails(e){
        e.preventDefault()
        console.log(name);
        console.log(movies);
        console.log(tnc);
    }

  return (
    <div className='container'>
        <form className='form-control text-center' onSubmit={getDetails} >
            <input type="text"  placeholder='Enter Your name' onChange={(e)=>setname(e.target.value)}/> <br /><br />
            <select onChange={(e)=>setmovies(e.target.value)}>
                <option>Select Option</option>
                <option>DC</option>
                <option>Marvel</option>
                <option>Disney</option>
                <option>Paramount</option>
                <option>Sony</option>
            </select><br /><br />
            <input type="checkbox" name="" id="" onChange={(e)=>setTnc(e.target.checked)} /> <span>Accept Terms And Condition</span>
            <button type="submit" className="btn btn-secondary">Submit</button>
            <button type="reset" className="btn btn-success">Clear</button>
        </form>
    </div>
  )
};
