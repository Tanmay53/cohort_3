import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

class Home extends React.Component {
    render() {
        return (
            <div className="container  d-flex justify-content-center">
                <div className="m-5 p-5">

                    <Link to="/bookings"><button className="btn btn-danger">Go to start your vehivle --></button></Link>
                </div>
            </div>
        )
    }
}


export default Home