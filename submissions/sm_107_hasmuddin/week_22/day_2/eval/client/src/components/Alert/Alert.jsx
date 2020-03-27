import React from 'react'
export default function Alert({ message, error }) {
    return (
        <div>
            {error == "false" ? <p className="p-1 text-center text-white bg-danger">{message}</p> : <p className="bg-success text-center p-1 text-white ">{message}</p>}
        </div>
    )
}


