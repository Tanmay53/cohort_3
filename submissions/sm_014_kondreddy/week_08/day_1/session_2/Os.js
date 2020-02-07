import React from 'react'
const Os =(props) =>{
    // console.log()
    return(
        <div>
            <h2>Mobile Operating System</h2>
            <ul>
                <li>{props.data1[0]}</li>
                <li>{props.data1[1]}</li>
                <li>{props.data1[2]}</li>
                <li>{props.data1[3]}</li>
            </ul>

            <h2>Mobile Manfacturers</h2>
            <ul>
                <li>{props.data2[0]}</li>
                <li>{props.data2[1]}</li>
                <li>{props.data2[2]}</li>
                <li>{props.data2[3]}</li>
            </ul>
        </div>

    )
}
export default Os