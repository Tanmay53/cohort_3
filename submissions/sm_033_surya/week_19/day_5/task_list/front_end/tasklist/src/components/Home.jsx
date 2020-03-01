import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-12 text-center">
                    <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
