import React from 'react'
import {connect} from 'react-redux'



const handleDelete = (index) => {
    console.log(index)
}

function TableRow(props) {
    return(
        <tr>
            <td>{props.row.name}</td>
            <td>{props.row.email}</td>
            <td>{props.row.phone}</td>
            <td>{props.row.sales}</td>
            <td>
                <button onClick={() => handleDelete(`${props.index}`)} className='btn btn-primary'>delete</button>
            </td>
        </tr>
    )
}

const mapDispathToProps = (dispatch) => {
    
}

export default connect()(TableRow)