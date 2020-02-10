import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/common/Navbar'
import { bookMeetingRoom } from '../redux/action'

export class BookingPage extends Component {

    handleBooking = () => {
        let id = this.props.match.params.id
        this.props.bookMeetingRoom(id)
        this.props.history.push('/confirmationPage')
    }
    render() {
        return (
            <div className="container">
                    <Navbar />
                    <div className="p-5 w-75">

                    
                    <h3 className="m-2"> Booking-Id :  {this.props.bookingId}</h3>
                    <h3 className="m-2">Name : Piyush Saudagare</h3>
                    <h3 className="m-2">Company Name : Masai school </h3>
                    <h3 className="m-2">Time-frame  : 10-02-2020 to 18-02-2020</h3>
                    <h3 className="m-2">Transaction-id : 244155848</h3>
                    <button className="btn btn-lg btn-outline-dark m-2" onClick={this.handleBooking}>Confirm </button>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bookingId : state.bookingId
})

const mapDispatchToProps = dispatch => ({
    bookMeetingRoom : (payload) => dispatch(bookMeetingRoom(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage)
