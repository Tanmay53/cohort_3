import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {user_logout, user_login} from '../../redux/Action'



class NavBar extends React.Component {

    handleClick = () => {
        // console.log(this.props.loginStatus)
        if (this.props.loginStatus === 'Logout') {
            this.props.user_logout()
        }
    }

    render() {
        // console.log('login status : ', this.props.loginStatus)
        return (
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a class="navbar-brand" href="#"><b>Blogger</b></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to='/blog/dashboard' >Home <span class="sr-only">(current)</span></Link>
                            </li>  
                            <li class="nav-item active">
                                <Link class="nav-link" to='/blog/create' > Create Blog <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to='/blog/myblog' > My Blogs <span class="sr-only">(current)</span></Link>
                            </li>   
                                        
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item active ml-auto">
                                <Link class="nav-link" to='/user/register' > Register <span class="sr-only">(current)</span></Link>
                            </li> 
                            <li class="nav-item active ml-auto">
                                <Link to='/user/login' onClick={this.handleClick} class="nav-link"> {this.props.loginStatus} <span class="sr-only">(current)</span></Link>
                            </li>                 
                        </ul>
                    </div>
                </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        user_logout: () => dispatch(user_logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)