import React from 'react'
import {connect} from 'react-redux'
import {addVehicle} from '../Redux/actions'
import {Link} from 'react-router-dom'
import {TextField, Button, Box} from '@material-ui/core'

class AddVehicle extends React.Component {
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
            id:Math.random()*100,
            model_no: '',
            model_name: '',
            manufacturer: '',
            sales: '',
            mileage: '', 
            price: '',
            qty: ''
        })
        this.props.addVehicle(this.state)
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
                        <Button variant='outlined' onClick={this.handleClick}>Submit</Button>
                        <br/>
                        <Link to='/'>Dashboard Page</Link>
                </Box>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addVehicle: (obj) => dispatch(addVehicle(obj))
    }
}

export default connect(null, mapDispatchToProps) (AddVehicle)