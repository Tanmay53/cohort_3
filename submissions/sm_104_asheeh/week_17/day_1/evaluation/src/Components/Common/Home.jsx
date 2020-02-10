import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            RoomName: "",
            capacity: "",
            pricePerDay: "",
            floor: ""
        }
    }

    render() {
        // console.log(this.props)
        if(this.props.isLogin === true) {
            return (
                <div className = "container text-center">
                    <h1>Available Meeting Rooms</h1>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Room Name</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Price/Day</th>
                            <th scope="col">Floor</th>
                            <th scope="col">Book</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.state.meetingRoomsList.map((ele, i) => {
                                    return (
                                        <tr key = {i}>
                                            <th scope = "row">{i+1} </th>
                                            <td>{ele.roomName}</td>
                                            <td>{ele.capacity}</td>
                                            <td>{ele.pricePerDay}</td>
                                            <td>{ele.floor}</td>
                                            <td>
                                                <Link to = {`/booking/${i+1}`}>
                                                    <button className = "btn-warning m-1 p-1">Book</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return <Redirect to = "/login" />
        }
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
    meetingRoomList: state.meetingRoomList,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

