import React, { Component } from 'react'
import { Link} from 'react-router-dom'
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuth: props.data
        }
    }
    render() {
        if (this.state.isAuth) {
            return (
                <React.Fragment>
                    <div>
                        <Link to="/">Logout</Link><br></br>
                        <Link to="/addUsers">ADD USERS</Link><br></br>
                        <Link to="/allUsers">ALL USERS</Link>
                    </div>
                </React.Fragment>
            )
        }
    }
}
