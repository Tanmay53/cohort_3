import React from 'react'
const Data = (props)=>{

    console.log(props)
     

    return(
        <div>
        <tbody>
            <tr>
            <td>{props.label.itemId}</td>
            <td>{props.label.itemName}</td>
            <td>{props.label.itemDesc}</td>
            <td>{props.label.category}</td>
            <td>{props.label.material}</td>
            <td>{props.label.price}</td>
            </tr>
        </tbody>           
        </div>
    )
}

export default Data

