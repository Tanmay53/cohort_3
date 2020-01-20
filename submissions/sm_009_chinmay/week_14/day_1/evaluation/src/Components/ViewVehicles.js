import React from 'react'
import {connect} from 'react-redux'
import TabularDisplay from '../Components/TabularDisplay'
import {sortAscSales, sortDescSales, sortDescManu, sortAscManu} from '../Redux/actions'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core'

class ViewVehicles extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <div >
                        <Button color="primary" variant="outlined" onClick={() => this.props.sortAscSales()}>Sort Asc By Sales</Button>
                        <Button color="primary" variant="outlined" onClick={() => this.props.sortDescSales()}>Sort Desc By Sales</Button>

                        <Link to='/' className='btn btn-primary'>Home</Link>

                        <Button color="primary" variant="outlined" onClick={() => this.props.sortAscManu()}>Sort Asc By Manu</Button>
                        <Button color="primary" variant="outlined" onClick={() => this.props.sortDescManu()}>Sort Desc By Manu</Button>
                        
                        <br/>

                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Model Number</th>
                                    <th>Model Name</th>
                                    <th>Manufacturer</th>
                                    <th>Sales</th>
                                    <th>Mileage</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.vehicle.vehicle.map((item, id) => {
                                    return <TabularDisplay item={item} id={id}/>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        vehicle: state.vehicle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortDescSales: () => dispatch(sortDescSales()),
        sortAscSales: () => dispatch(sortAscSales()),
        sortDescManu: () => dispatch(sortDescManu()),
        sortAscManu: () => dispatch(sortAscManu()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ViewVehicles)