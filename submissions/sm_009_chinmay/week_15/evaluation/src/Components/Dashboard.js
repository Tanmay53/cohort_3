import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {userLogin} from '../Redux/actions'
import { connect } from 'react-redux'


class Dashboard extends Component {
    componentDidMount() {
        if(this.props.login.isLoggedIn === false) {
            this.props.history.push('/login')
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>Welcome to Dashboard page..!!</h2>
                 <div className="p-5 ">
                    <Link to='/addTopic'>
                    <button style={{  borderRadius: '50px',fontSize: '20px', width: '200px', height: '200px'}} className="p-3 mx-2" id="add-new-entry" >Add A New Topic</button>
                    </Link>

                    <Link to='/viewTopics'>
                    <button style={{  borderRadius: '50px',fontSize: '20px', width: '200px', height: '200px'}} className="p-3 mx-2" id="overall-stat">View Topics</button>
                    </Link>

                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (obj) => dispatch(userLogin(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)