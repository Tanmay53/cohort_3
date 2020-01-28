import React from 'react';
import { Container, Typography, Paper, TextField, Select, FormControl, Button, MenuItem } from '@material-ui/core';
import { AddNewTopics } from './../../reducer/action'
import { connect } from 'react-redux'

class AddNewTopic extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            category: '',
            userDetails: ''
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        console.log(this.state);
        console.log("main",this.props.mainData)
        return (
            <Container>
                <Typography variant="h3" align='center'>Add Details</Typography>
                <Paper style={{width:400, marginLeft: "auto",marginRight:"auto",display:"block",padding:200}}>
                    <TextField name="title" value={this.state.title} onChange={this.handelChange} label="Title" variant="outlined" />
                    <br></br>
                    <TextField name="body" value={this.state.body} onChange={this.handelChange} label="Body" variant="outlined" />
                    <br></br>
                    <FormControl variant='outlined' >
                        <Select labelId="demo-simple-select-label" name="category" value={this.state.category} onChange={this.handelChange}>
                            <MenuItem value={"Random"}>Random</MenuItem>
                            <MenuItem value={"General"}>General</MenuItem>
                            <MenuItem value={"Programming"}>Programming</MenuItem>
                            <MenuItem value={"Algorithm"}>Algorithm</MenuItem>
                            <MenuItem value={"Suggestions"}>Suggestions</MenuItem>
                        </Select>
                    </FormControl>
                    <br></br>
                    <TextField name="userDetails" value={this.state.userDetails} onChange={this.handelChange} label="User Details" variant="outlined" />
                    <br></br>
                    <Button variant="outlined" onClick={()=> this.props.AddNewTopics(this.state)} >Submit Details</Button>
                </Paper>
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
    mainData : state.mainData
    
})

const mapDispatchToProps = dispatch => {
    return {
        AddNewTopics : (data)=> dispatch(AddNewTopics(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTopic)

