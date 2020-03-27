import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {user_logout} from '../redux/Action'

const handleClick = (props) => {
    // console.log(this.props.loginStatus)
    if (props.isLoggedIn) {
        props.user_logout()
    }
} 

function NavBar(props) {
    return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#"><b>School Teacher List</b></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to='/' > Home <span class="sr-only">(current)</span></Link>
                        </li>                    

                        <li class="nav-item active">
                            <Link class="nav-link" to='/class' > Class <span class="sr-only">(current)</span></Link>
                        </li>  
                        <li class="nav-item active">
                            <Link class="nav-link" to='/section' > Section <span class="sr-only">(current)</span></Link>
                        </li>                    
                        <li class="nav-item active">
                            <Link class="nav-link" to='/subject' > Subject <span class="sr-only">(current)</span></Link>
                        </li>                    
                        <li class="nav-item active">
                            <Link class="nav-link" to='/teacher' > Teacher <span class="sr-only">(current)</span></Link>
                        </li>                    
                    </ul>
                    <ul class="navbar-nav">
                        {props.showRegisterButton &&  
                            <li class="nav-item active ml-auto">
                                <Link class="nav-link" to='/register' > Register <span class="sr-only">(current)</span></Link>
                            </li> 
                        }

                        <li class="nav-item active ml-auto">
                            <Link to='/login' onClick={() => handleClick(props)} class="nav-link"> {props.menuLabel} <span class="sr-only">(current)</span></Link>
                        </li>                 
                    </ul>
                </div>
            </nav>
        )
    }
const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.login.isLoggedIn,
            menuLabel: state.login.menuLabel,
            showRegisterButton: state.login.showRegisterButton
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        user_logout: () => dispatch(user_logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
