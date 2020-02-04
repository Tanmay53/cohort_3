import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@material-ui/core'



const root = {
    padding : 100,
    width : 800,
    textDecoration : "none"

}
const center = {
    marginLeft : "auto",
    marginRight : "auto",
    display : "block",
    padding : 15,
    marginTop : 30,
}

export default class Dashboard extends Component {
    
    render() {
        console.log('route')
        return (
            <React.Fragment>
                <Typography variant='h1' align='center'>Welcome To Dash Board</Typography>
                <Container style ={root}>
                    <Link to="/dashboard/addtopic"><Button style={center} variant="outlined">ADD A NEW TOPIC</Button></Link>
                    <Link to="/dashboard/viewtopic"><Button style={center} variant="outlined">VIEW TOPICS</Button></Link>
                </Container>
            </React.Fragment>
        )
    }
}
