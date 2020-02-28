import React from 'react'
import {Redirect} from 'react-router-dom'

export default function ValiditeLogin(props) {
    const token = localStorage.getItem('token')
    if (token == null) {     
        return (
            <Redirect to='/user/login'></Redirect>
        )
    }
    else {
        return (
            <></>
        )
    }
}
