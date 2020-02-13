import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getitem, confirming } from '../redux/Actions'

export class Room extends Component {
    componentDidMount() {
        this.props.getitem(this.props.match.params.id)
    }
    handleClick = (id) => {
        this.props.confirming(id)
    }
    render() {
        console.log(this.props.value);
        return (
            <div>
                <div className="container text-center">
                    <div className="row offset-4">
                        {this.props.value.map((ele) => <div className="col-4 p-4"><div><img src="https://via.placeholder.com/250X250" /></div><div>RoomName:{ele.roomName}</div><div>FloorNo:{ele.floorNo}</div><div>Capacity:{ele.capacity}</div><div>Price:{ele.price} / day </div><div><Link to="/payments"><button onClick={() => this.handleClick(ele.roomName)}>Confirm</button></Link></div></div>)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.mainReducer.displayData

})

const mapDispatchToProps = dispatch => {
    return {
        getitem: (a) => dispatch(getitem(a)),
        confirming: (a) => dispatch(confirming(a))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
