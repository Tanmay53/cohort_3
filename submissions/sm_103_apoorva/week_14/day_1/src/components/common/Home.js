import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render()
    {
        return(
            <div className="container text-center">
                <h1 className="text-center text-info">ADMIN'S DASHBOARD</h1>
                <Link to="/addvehicle"><button className="btn btn-primary m-5">Add Vehicle</button></Link>
                <Link to="/showvehicle"><button className="btn btn-primary m-5">Show Vehicle</button></Link>
            </div>
        )
    }
}

export default Home