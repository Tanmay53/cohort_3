import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Add from './Add'
import Table from './Table'
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log(props)
    }
    render() {
        if (this.props.login) {
            return (
                <React.Fragment>
                    <div>
                        <Link to="/add">Add Vehicles</Link>
                        <Route path="/add" render={props=><Add {...props}/>}></Route>
                        <Link to="/Table">View Vehicles</Link>
                        <Route path="/Table" component={Table}></Route>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <div>
                        <Redirect to="/"></Redirect>
                    </div>
                </React.Fragment>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    login: state.isAuth
})

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
