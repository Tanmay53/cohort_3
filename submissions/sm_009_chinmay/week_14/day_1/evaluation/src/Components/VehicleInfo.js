import React from 'react'
import {connect} from 'react-redux'
import {infoVehicle} from '../Redux/actions'
import {Link} from 'react-router-dom'
import {TextField, Box} from '@material-ui/core'

class VehicleInfo extends React.Component {
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

    handleClick = () => {
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
                    <h4>Requested Vehicle Info..!!</h4>
                        <TextField 
                            disabled
                            variant="outlined"
                            margin='normal'
                            name='model_no' 
                            value={this.state.model_no} 
                            onChange={this.handleChange} 
                            type='text' 
                            label='Model Number'></TextField>
                            <br/>
                        <TextField 
                            disabled
                            margin='normal'
                            name='model_name' 
                            value={this.state.model_name} 
                            onChange={this.handleChange} 
                            type='text' 
                            variant="outlined"
                            label='Model Name'></TextField>
                            <br/>
                        <TextField 
                            disabled
                            margin='normal'
                            name='manufacturer' 
                            value={this.state.manufacturer} 
                            onChange={this.handleChange} 
                            type='text'
                            variant="outlined"
                            label='Manufaturer'></TextField>
                            <br/>
                        <TextField 
                            disabled
                            margin='normal'
                            name='sales' 
                            value={this.state.sales} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Sales'></TextField>
                            <br/>
                        <TextField 
                            disabled
                            margin='normal'
                            name='mileage' 
                            value={this.state.mileage} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Mileage'></TextField>
                            <br/>
                        <TextField 
                            disabled
                            margin='normal'
                            name='price' 
                            value={this.state.price} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Price'></TextField>
                            <br/>
                        <TextField 
                            disabled
                            margin='normal'
                            name='qty' 
                            value={this.state.qty} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Quantity'></TextField>
                            <br/>
                        <Link to='/viewAllVehicles'>View All Vehicles Page</Link>
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
        infoVehicle: (obj) => dispatch(infoVehicle(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (VehicleInfo)