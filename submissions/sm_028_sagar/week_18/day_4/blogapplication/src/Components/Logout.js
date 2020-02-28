import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout() {
    return (
        <div className='text-center text-success'>
            <h1>You are successfully logged out...</h1>
            <Link to='/'>Login Page</Link>
        </div>
    )
}
