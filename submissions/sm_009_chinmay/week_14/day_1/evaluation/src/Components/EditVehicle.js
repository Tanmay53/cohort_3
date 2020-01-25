import React from 'react'
import {connect} from 'react-redux'
import {editVehicle} from '../Redux/actions'
import {Link} from 'react-router-dom'
import {TextField, Button, Box} from '@material-ui/core'

class EditVehicle extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            id:0,
            model_no: '',
            model_name: '',
            manufacturer: '',
            sales: '',
            mileage: '', 
            price: '',
            qty: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            model_no: this.state.model_no,
            model_name: this.state.model_name,
            manufacturer: this.state.manufacturer,
            sales: this.state.sales,
            mileage: this.state.mileage, 
            price: this.state.price,
            qty: this.state.qty
        })
        this.props.editVehicle(this.state, this.props.match.params.id)
        this.setState({
            model_no: '',
            model_name: '',
            manufacturer: '',
            sales: '',
            mileage: '', 
            price: '',
            qty: ''
        })
        this.props.history.push('/viewAllVehicles')
    }

    componentDidMount() {

        let idx = this.props.match.params.id
        console.log(idx)
        console.log(this.props)
        let data = this.props.vehicle.vehicle.filter(e => e.id == idx)
        console.log(data)

        this.setState({
            id: data[0].id,
            model_no: data[0].model_no,
            model_name: data[0].model_name,
            manufacturer: data[0].manufacturer,
            sales: data[0].sales,
            mileage: data[0].mileage, 
            price: data[0].price,
            qty: data[0].qty
        })
    }

    render() {
        return (
            <>
                <Box>
                <h5>Add new Vehicle</h5>
                        <TextField 
                            variant="outlined"
                            margin='dense'
                            name='model_no' 
                            value={this.state.model_no} 
                            onChange={this.handleChange} 
                            type='text' 
                            label='Enter Model Number'></TextField>
                            <br/>
                        <TextField 
                            margin='dense'
                            name='model_name' 
                            value={this.state.model_name} 
                            onChange={this.handleChange} 
                            type='text' 
                            variant="outlined"
                            label='Enter Model Name'></TextField>
                            <br/>
                        <TextField 
                            margin='dense'
                            name='manufacturer' 
                            value={this.state.manufacturer} 
                            onChange={this.handleChange} 
                            type='text'
                            variant="outlined"
                            label='Enter Manufaturer'></TextField>
                            <br/>
                        <TextField 
                            margin='dense'
                            name='sales' 
                            value={this.state.sales} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Enter Sales'></TextField>
                            <br/>
                        <TextField 
                            margin='dense'
                            name='mileage' 
                            value={this.state.mileage} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Enter Mileage'></TextField>
                            <br/>
                        <TextField 
                            margin='dense'
                            name='price' 
                            value={this.state.price} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Enter Price'></TextField>
                            <br/>
                        <TextField 
                            margin='dense'
                            name='qty' 
                            value={this.state.qty} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Enter Quantity'></TextField>
                            <br/>
                        <Button variant='outlined' onClick={this.handleClick}>Edit</Button>
                        <br/>
                        <Link to='/'>Dashboard Page</Link>
                </Box>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        vehicle: state.vehicle,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editVehicle: (obj) => dispatch(editVehicle(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditVehicle)