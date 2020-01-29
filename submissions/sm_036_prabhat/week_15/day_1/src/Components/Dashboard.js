import React, { Component } from 'react'
import { Link, Route} from 'react-router-dom';
import AddNewTopic from './Common/AddNewTopic'
import ViewTopic from './Common/ViewTopic';
import { Container, Typography, Paper, TextField,Box, Button,styles } from '@material-ui/core'



export default class Dashboard extends Component {
    render() {
        console.log('route')
        return (
            <React.Fragment>
                <Container>
                    <Link to="/login/addtopic"><Button variant="outlined">ADD A NEW TOPIC</Button></Link>
                    <Link to="/login/viewtopic"><Button variant="outlined">VIEW TOPICS</Button></Link>
                </Container>

                <Route path="/login/addtopic" exact component={AddNewTopic}></Route>
                <Route path="/login/viewtopic" component ={ViewTopic}></Route>
            </React.Fragment>
        )
    }
}
