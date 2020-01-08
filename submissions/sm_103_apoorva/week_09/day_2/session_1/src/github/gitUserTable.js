import React from 'react'
const Data = (props)=>{

     

    return(
        <React.Fragment>
            <tr>
            <td>{props.label.id}</td>
            <td>{props.label.login}</td>
            <td><img src={props.label.avatar_url} height="120px" alt="no image"></img></td>
            <td>{props.label.score}</td>
            <td><a href={props.label.html_url} className="btn btn-outline-info" target="_target">More Info</a></td>
            </tr>
        </React.Fragment>          
    )
}

export default Data