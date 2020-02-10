import React, { Component } from 'react' 
import {Link } from 'react-router-dom';

export default class Order extends Component {
    render() {
        return (
            <div>
                 <div className="container-fluid bg-dark">
                    <div className="text-center h1 text-white p-3">Welcome to Room Booking</div>
                </div>
                <div className="container">
                    <Link to='/'>Go to home</Link>
                </div>
            </div>
        )
    }
}
