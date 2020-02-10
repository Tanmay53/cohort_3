import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AddRoom from './AddRoom';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-dark text-white">
                    <div className="container p-2">
                        <ul className="nav">
                            <li clclassNameass="nav-item">
                                <div className="text-center h1 p-2"> <Link to='/'>Room Booking SeviceA</Link> </div>
                            </li>
                        </ul>
                        <ul className='nav justify-content-end'>
                            <li className="nav-item">
                                <Link to='/order'>Order Rooms</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <h1 className='text-center p-3'>List of avilable Rooms</h1>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Sr. No</th>
                                <th>Floor No.</th>
                                <th>Meeting Room Name</th>
                                <th>Capacity</th>
                                <th>Price Per Day</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.roomData.map((item, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.floor}</td>
                                    <td>{item.roomName}</td>
                                    <td>{item.capacity}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    roomData: state.roomData
})



export default connect( mapStateToProps)(Home)