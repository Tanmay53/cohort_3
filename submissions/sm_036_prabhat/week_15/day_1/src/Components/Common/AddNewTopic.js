import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Paper, TextField, Select, FormControl, Button, MenuItem, InputLabel } from '@material-ui/core';
import { AddNewTopics } from './../../reducer/action';
import { connect } from 'react-redux';


const center = {
    marginLeft: "auto", marginRight: "auto", display: "block", padding: 20, marginTop: 30,
}
class AddNewTopic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            category: '',
            userDetails: '',
            commentData : [],
            createdTime: Date(),
            miliSeconds: Date.parse(Date())
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handelClick = () => {
        this.setState({
            title: '',
            body: '',
            category: '',
            userDetails: '',
            commentData : [],
            createdTime: Date(),
            miliSeconds: Date.parse(this.state.createdTime)
        })
        this.props.AddNewTopics(this.state)
    }

    render() {
        return (
            <Container>
                <Typography variant="h3" align='center'>Add Details</Typography>
                <Paper style={{ width: 230, marginLeft: "auto", marginRight: "auto", display: "block", padding: 100 }}>
                    <TextField name="title" value={this.state.title} onChange={this.handelChange} label="Title" variant="outlined" />
                    <br></br>
                    <TextField style={{ marginTop: 10 }} name="body" value={this.state.body} onChange={this.handelChange} label="Body" variant="outlined" />
                    <br></br>
                    <FormControl variant='outlined' >
                        <InputLabel>Category</InputLabel>
                        <Select style={{ width: 230, marginTop: 10 }} name="category" value={this.state.category} onChange={this.handelChange}>
                            <MenuItem value={"Random"}>Random</MenuItem>
                            <MenuItem value={"General"}>General</MenuItem>
                            <MenuItem value={"Programming"}>Programming</MenuItem>
                            <MenuItem value={"Algorithm"}>Algorithm</MenuItem>
                            <MenuItem value={"Suggestions"}>Suggestions</MenuItem>
                        </Select>
                    </FormControl>
                    <br></br>
                    <TextField style={{ marginTop: 10 }} name="userDetails" value={this.state.userDetails} onChange={this.handelChange} label="User Details" variant="outlined" />
                    <br></br>
                    <Button style={{ marginTop: 10, width: 230, padding: 15, backgroundColor: "grey" }} variant="outlined" onClick={this.handelClick} >Submit Details</Button>
                </Paper>
                <Link to="/dashboard"><Button style={center} variant="outlined">Go Back To DashBoard</Button></Link>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    mainData: state.mainData

})

const mapDispatchToProps = dispatch => {
    return {
        AddNewTopics: (data) => dispatch(AddNewTopics(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTopic)
