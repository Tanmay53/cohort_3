import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        if(this.props.isLogin === true) {
            return (
                <div className="container">
                    <h1>Welcome to Dashboard</h1>
                    <div className="row">
                        <div className="col-3">
                            <Link to="/">
                                <button>Home</button>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/AddTopic">
                                <button>Add a new topic</button>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/ViewTopics">
                                <button>View Topics</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Redirect to="/login" />
        }
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})

export default connect(mapStateToProps)(Dashboard)
