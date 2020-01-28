import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { add } from './action'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';
class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            category: "",
            name: "",
            place: "",
            id: 0,
            date:Date(),
            dateValue:0
        }
    }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        handleSelect = (e) => {
            this.setState({
                category: e.target.value
            })
        }
        handleClick = () => {
            this.setState({
                id: this.state.id + 1,
                date:Date(),
                dateValue:Date.parse(Date())
            })
            if(this.state.title==""||this.state.body==""||this.state.category==""||this.state.name==""||this.state.place=="")
            {
                alert("enter data")
            }
            else 
            {
                alert("Entry accepted")
                this.props.add(this.state)

            }
            this.setState({
                title:"",
                body:"",
                category:"",
                name:"",
                place:"",
                date:"",
                dateValue:""
            })
        }
        render() {
            return (
                <React.Fragment>
                    <Box border={1} style={{ width: "300px", textAlign: "center", margin: "100px 0px 0px 500px" }}>
                        <TextField id="standard-basic" label="Title" name="title" value={this.state.title} onChange={this.handleChange} /><br></br>
                        <TextField id="standard-basic" label="Description" name="body" value={this.state.body} onChange={this.handleChange} /><br></br>
                        <label style={{marginRight:"20px"}}>Category</label>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={this.handleSelect}>
                            <MenuItem value={"Random"}>Random</MenuItem>
                            <MenuItem value={"General"}>General</MenuItem>
                            <MenuItem value={"Programming"}>Programming</MenuItem>
                            <MenuItem value={"Algorithm"}>Algorithm</MenuItem>
                            <MenuItem value={"Suggestions"}>Suggestions</MenuItem>
                        </Select>
                        <TextField id="standard-basic" label="Name" name="name" value={this.state.name} onChange={this.handleChange} /><br></br>
                        <TextField id="standard-basic" label="Place" name="place" value={this.state.place} onChange={this.handleChange} /><br></br>
                        <div style={{ marginTop: "20px" }}> <Button variant="contained" color="secondary" onClick={this.handleClick}>SUBMIT</Button></div>
                        <Link to="/">Go to Dashboard</Link>
                    </Box>
                </React.Fragment>
            )
        }
    }


    const mapDispatchToProps = dispatch => {
        return ({
            add: (data) => dispatch(add(data))
        })
    }
    export default connect(null, mapDispatchToProps)(Add)

