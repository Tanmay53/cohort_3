import React from 'react'
import {connect} from 'react-redux'
import {deleteVehicle, editVehicle} from '../Redux/actions'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

function Table(props) {

    return(
        <tr id={props.item.id}>
            <td>{props.item.model_no}</td>
            <td>
                <Link to={`/vehicleInfo/${props.item.id}`}>{props.item.model_name}</Link>
            </td>
            <td>{props.item.manufacturer}</td>
            <td>{props.item.sales}</td>
            <td>{props.item.mileage}</td>
            <td>{props.item.price}</td>
            <td>{props.item.qty}</td>
            <td>
                <Button onClick={() => props.editVehicle(props.item, props.item.id)} className='btn btn-primary'>
                    <Link to={`/edit/${props.item.id}`}>EDIT</Link>
                </Button>               
            </td>
            <td>
                <Button onClick={() => props.deleteVehicle(props.item.id)}>Delete</Button>
            </td>
        </tr>
    )
}

const mapStateToProps = state => {
    return {
        vehicle: state.vehicle,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteVehicle: (id)=> dispatch(deleteVehicle(id)),
        editVehicle: (item, id) => dispatch(editVehicle(item, id))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Table)