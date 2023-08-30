import React from 'react'

const Hook2_useEffect = () => {
    const [name, setName] = React.useState('Anil')
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        // console.error('useEefect run');
    },)
    return (
        <div>
            <h1>{count}</h1>
            <button className="btn btn-warning" onClick={()=>setCount(count+1)}>Count</button>
            <h1 className="text-center">Hook2_useEffect</h1>
            <h1 className="text-success">{name}</h1>
            <button className="btn btn-info"
            onClick={()=>setName("anilKumarSwain")}
            >Upadte name With useState ans useEffect</button>
        </div>
    )
}

export default Hook2_useEffect;



{/* <p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>
<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p> */}