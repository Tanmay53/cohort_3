import React from 'react'

function GithubUser(props) {
    return (
        <div>
            <input type="text" className="py-2 px-3 ml-5 mt-5 border-success" value={props.value} onChange ={props.change} placeholder='Search by username'></input>
            <button className="btn py-2 px-3 bg-dark text-white ml-2" type="submit" onClick={props.search}>Search</button>
        </div>
    )
}

export default GithubUser
