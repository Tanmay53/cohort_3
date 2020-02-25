import React from 'react'

export default function Dashboard(props) {

    const handleClick = () =>{
        props.history.push('/Profile')
    }


    return (
        <div className='container text-center my-5'>
            <button className='btn btn-outline-primary' onClick={() => handleClick()}>Get Profile Details</button>
            <br/>
            <small>Click To see profile details</small>
        </div>
    )
}
