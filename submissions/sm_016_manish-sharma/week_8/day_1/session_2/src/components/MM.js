import React from 'react'

function MM(props){
    return(
        <div>
            <h3>Mobile Manufacturers</h3>
            <ul>
                <li>{props.obj[0]}</li>
                <li>{props.obj[1]}</li>
                <li>{props.obj[2]}</li>
                <li>{props.obj[3]}</li>
            </ul>
        </div>
    )
}

export default MM;