import React from 'react'

export default function Success(props) {
    const handleLogout = () =>{
        props.history.push('/login')
    }
    return (
        <div className='container'>
            <h3 className='text-success'>Thanks For Loggin In...</h3>
            <button className='btn btn-outline-primary' onClick={()=>handleLogout()}>Logout Plase</button>
        </div>
    )
}
