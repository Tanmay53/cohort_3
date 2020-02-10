import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Booking extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props)
        const info = this.props.state.meetingRoomsList[0]
        return (
            <div className = "container text-center">
                <h1>Booking page</h1>
                <h2>{info.roomName} </h2>
                <h2>{info.capacity} </h2>
                <h2>{info.pricePerDay} </h2>
                <h2>{info.floor} </h2>
                <Link to = {`/confirm/${this.props.match.params.id}`}><button className = "btn-primary">Confirm Booking</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
    meetingRoomList: state.meetingRoomList,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Booking)
