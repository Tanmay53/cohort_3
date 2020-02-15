import React, {useEffect, useState} from 'react'

export default function Alert({message, error}) {
    const [condition, setCondition] = useState(true)
    const [count, setCount] = useState(3)
    useEffect(()=>{
    const rem = setInterval(()=>{
        setCount(count-1)
    }, 1000)
    if(count==0){
        clearInterval(rem)
        setCondition(false)
    }
    }, [])
    if(condition){
        return (
            <div>
                {error=="false"?<p className="p-1 text-center text-white bg-success">{message}</p>:<p className="bg-danger text-center p-1 text-white ">{message}</p>}
            </div>
        )
    }
    else{
        return <div></div>
    }
}


