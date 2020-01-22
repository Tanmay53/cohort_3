import React, { Component } from 'react'
import {Box, Button} from '@material-ui/core/';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {userLogin} from '../Redux/actions'

class Dashboard extends Component {
    componentDidMount() {
        if(this.props.login.isLoggedIn === false) {
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div>
                <Box justifyContent="center">
                    <Button margin='normal' variant="contained" >
                        <Link to='/addVehicle' >
                            ADD NEW VEHICLES</Link>
                    </Button>
                    <Button margin='normal' variant="contained" >
                        <Link to='viewAllVehicles'>
                            VIEW ALL VEHICLES</Link>
                    </Button>
                </Box>
                
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
        userLogin: (obj) => dispatch(userLogin(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)