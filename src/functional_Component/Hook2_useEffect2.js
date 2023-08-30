import a from 'react'
import { Hook_useEffect2_2 } from './Hook_useEffect2_2'

export const Hook2_useEffect2 = () => {
    const [count, setCount] = a.useState(10)
    const [data, setData] = a.useState(100)

    // a.useEffect(() => {
    //     console.log('useEffectWork');
    // }, [count])

    return (
        <div className='text-primary'>
            <Hook_useEffect2_2 count={count} data={data}/>
            <button className="btn btn-danger" onClick={() => setCount(count + 1)}>Update Count</button>
            <button className="btn btn-success" onClick={() => setData(data + 1)}>Update Data</button>
        </div>
    )
}
