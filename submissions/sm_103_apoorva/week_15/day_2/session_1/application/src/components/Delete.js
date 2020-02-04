import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Delete = (props) => {
    console.log(props.match.params.id)
    const del = (event) =>
    {
        event.preventDefault()
        alert("Deleted")
        let item_no = props.match.params.id
        let baseUrl = 'http://127.0.0.1:5000/delete'
        let url = baseUrl +"/"+ item_no
        axios.post(url,{
            item_no : item_no
        }).then
        (res =>
            console.log(res)
        ).catch(error => console.log(error))
    }
    return (
        <div className="m-5">
            <h1 className="text-danger">Are you Sure?</h1>
            <button className="btn btn-info" onClick={del}>Delete</button>
            <Link to='/'><button className="btn btn-info ml-2">Go Back</button></Link>
        </div>
    )
}

export default Delete
