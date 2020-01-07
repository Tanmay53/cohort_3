import React from 'react'
const Data = (props)=>{

    // console.log(props)
     

    return(
        <React.Fragment>
            <tr>
            <td>{props.label.itemId}</td>
            <td>{props.label.itemName}</td>
            <td>{props.label.itemDesc}</td>
            <td>{props.label.category}</td>
            <td>{props.label.price}</td>
            </tr>
        </React.Fragment>          
    )
}

export default Data

