import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Purchase(props) {
    console.log(props.match.params.id)
    const buy = (event) =>
    {
        event.preventDefault()
        alert("Purchased")
        let item_no = props.match.params.id
        let baseUrl = 'http://127.0.0.1:5000/purchased'
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
            <button className="btn btn-info" onClick={buy}>Purchase</button>
            <Link to='/'><button className="btn btn-info ml-2">Go Back</button></Link>
        </div>
    )
}

export default Purchase
