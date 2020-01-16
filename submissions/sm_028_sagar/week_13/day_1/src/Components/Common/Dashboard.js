import React from 'react'
import { Container,Box,Button, Typography } from '@material-ui/core'
import {Redirect,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {isLogOut} from '../../Redux/actions'

function Dashboard(props) {
    if(props.isLoggedIn){
        return (
            <div>
                <Container maxWidth='sm'>
                    <Box m={5}>
                        <Typography m={5} variant='h5'>
                            Dashboard
                        </Typography>
                    </Box>
                    <Box m={5}>
                        <Button variant='contained' > <Link to='/addUser'> ADD NEW USER</Link></Button>
                    </Box>
                    <Box m={5}>
                        <Button variant='contained'><Link to='/viewUser'> VIEW NEW USER</Link></Button>
                    </Box>
                    <Box m={5}>
                        <Button variant='contained' onClick={()=>props.logOut()}>LOGOUT</Button>
                    </Box>
                </Container>
            </div>
        )
    }else
        return <Redirect to='/login' />
}

const mapStateToProps = state =>{
   return {
    isLoggedIn:state.isLoggedIn
   }
}

const mapDispatchToProps = dispatch =>{
    return {
        logOut:() => dispatch(isLogOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)