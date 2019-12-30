import React from 'react'
import {connect} from 'react-redux'
import {userLoginAction} from '../Redux/Actions/Action'
import {Link} from 'react-router-dom'




class Dashboard extends React.Component {
    addNew = () => {
        console.log(this.props)
    }


    componentDidMount() {
        if(this.props.login.isLoggedIn == false) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <h5>Hi. Welcome</h5>
                        <h5>You can perform following operaitons !</h5>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-2 offset-2'>
                        <Link to='/addstaff' onClick={this.addNew} className='btn btn-primary'>Add New Staff</Link>
                    </div>
                    <div className='col-2'>
                        <Link to='/viewstaff' className='btn btn-primary'>View All Staff</Link> 
                    </div>
                </div>
            </div>
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
        userLoginAction: (obj) => dispatch(userLoginAction(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)