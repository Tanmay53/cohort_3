import React from 'react'

export default function UserTable({user}) {
    const {id, name, mobile, age, email} = user
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{mobile}</td>
            <td>{email}</td>
            <td>{age}</td>    
        </tr>
    )
}
