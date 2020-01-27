import React from 'react'
import { connect } from 'react-redux';
import {Link,Redirect} from 'react-router-dom'

class Home extends React.Component {
    render()
    {
        return(
            this.props.isAuth ? (
                <div className="container text-center">
                    <h1 className="text-center text-info">ADMIN'S DASHBOARD</h1>
                    <Link to="/addtopic"><button className="btn btn-primary m-5">Add Topic</button></Link>
                    <Link to="/showtopic"><button className="btn btn-primary m-5">Show Topic</button></Link>
                </div>
            ) :
            (
                <Redirect to="/login" />
            )
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.form
})


export default connect(mapStateToProps)(Home)