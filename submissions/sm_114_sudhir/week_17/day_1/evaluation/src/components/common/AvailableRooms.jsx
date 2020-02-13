import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../common/Card'
import { bookRooms } from '../../redux/action'

let bookingId = 10000000
let transactionId = 2000000

class AvailableRooms extends Component {
    constructor(props){
        super(props)
    }

    bookRooms = (e) => {
        // this.props.bookRooms(e.target.value)
        this.props.bookRooms(e.target.value, {bookingId:bookingId++, transactionId:transactionId++})

    }

    render() {
        console.log(this.props)
        return (
            this.props.page.map(ele => {
                return (
                    <div className="col-4 m-auto">
                        <Card bookRooms = {this.bookRooms} item = {ele}/>
                    </div>
                )
            })
            
        )
    }
}

const mapStateToProps = (state) => ({
    state: state,
    roomsData : state.roomsData
})

const mapDispatchToProps = dispatch => ({
    bookRooms: (payload, transactionDetails) => dispatch(bookRooms(payload, transactionDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(AvailableRooms)
