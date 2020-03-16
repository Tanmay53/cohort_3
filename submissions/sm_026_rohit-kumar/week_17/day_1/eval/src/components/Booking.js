import React from 'react'
import {connect} from 'react-redux'
import {make_booking, load_data} from '../redux/Action'


class Booking extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            floor: '',
            capacity: ''
        }
    }



    componentWillMount = () => {
        let query = new URLSearchParams(this.props.location.search)
        let id = query.get('id')
        let name = query.get('name')
        let price = query.get('price')
        let floor = query.get('floor')
        let capacity = query.get('capacity')
        let dateFrom = query.get('dateFrom')
        let dateTo = query.get('dateTo')

        this.setState({
            id: id,
            name: name,
            price: price,
            floor: floor,
            capacity: capacity,
            dateFrom: new Date(dateFrom),
            dateTo: new Date(dateTo)
        })
    }

    handleConfirm = () => {
        this.props.make_booking(this.state.id, {'from': this.state.dateFrom, 'to': this.state.dateTo})
        this.props.load_data()
    }

    render() {
        return (
            <>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='p-3 bg-primary text-white'>Booking Page</h3>
                        <p className='mt-3'><b>Booking Details</b></p>
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-4'><b>Room Name</b></div>
                    <div className='col-4 offset-2'>{this.state.name}</div>
                </div>
                <div className='row mt-2'>
                    <div className='col-4'><b>Floor</b></div>
                    <div className='col-4 offset-2'>{this.state.floor}</div>
                </div>
                <div className='row mt-2'>
                    <div className='col-4'><b>Capacity</b></div>
                    <div className='col-4 offset-2'>{this.state.capacity}</div>
                </div>
                <div className='row mt-2'>
                    <div className='col-4'><b>Starting Date</b></div>
                    <div className='col-4 offset-2'>{new Date(this.state.dateFrom).toDateString()}</div>
                </div>

                <div className='row mt-2'>
                    <div className='col-4'><b>Ending Date</b></div>
                    <div className='col-4 offset-2'>{new Date(this.state.dateTo).toDateString()}</div>
                </div>
                <div className='row mt-2'>
                    <div className='col-4'><b>Pricing</b></div>
                    <div className='col-4 offset-2'>₹ {this.state.price}</div>
                </div>

                <div className='row mt-4'>
                    <div className='col-4'>
                        <button onClick={this.handleConfirm} className='btn btn-primary btn-sm mr-3'>Confirm</button>
                        <button onClick={() => this.props.history.push('/')} className='btn btn-primary btn-sm'>Home</button>
                    </div>                    
                </div>
            </>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        make_booking: (id, range) => dispatch(make_booking(id, range)),
        load_data: () => dispatch(load_data())
    }
}

export default connect(null, mapDispatchToProps)(Booking)