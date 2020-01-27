import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import {Button, TextField, Typography, Container} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import {addNewTopic} from '../../Redux/Action'

let count = 1;
class AddTopic extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: "",
             body: "",
             category: "",
             userDetails: "",
             id: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    addNewTopic = (e) => {
        e.preventDefault();
        const newTopicInfo = {
            title: this.state.title,
            body: this.state.body,
            category: this.state.category,
            userDetails: this.state.userDetails,
        }
        // const newTopicInfo = {
        //     ...this.state,id:count
        // }
        // count++;
        this.props.addNewTopic({...newTopicInfo, id:count++});
        alert("New Topic Added");
    }
    
    render(){
        // console.log(this.state)
        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Typography component="h1" variant="h3">
                  Add New Topic
                </Typography>
                <form>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Title"
                    name="title"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Body"
                    name="body"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <FormControl className="form-control">
                  <select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    className="form-control p-2"
                    name="category"
                    onChange={(e) => this.handleChange(e)}
                    >
                    <option>Category</option>
                    <option>Random</option>
                    <option>General</option>
                    <option>Programming</option>
                    <option>Algorithm</option>
                    <option>Suggestion</option>
                 </select>
                 </FormControl>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="User Details"
                    name="userDetails"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.addNewTopic}
                  >
                    Add A New Topic
                  </Button> 
                </form>
              </div>
            </Container>
          );
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    addNewTopic: (payload) => dispatch(addNewTopic(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTopic)

