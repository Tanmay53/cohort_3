import React, { Component } from 'react'
import { connect } from 'react-redux'
import { edit } from './action'
import { Route, Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            category: "",
            name: "",
            place: "",
            id: "",
            date:0,
            dateValue:0,
            comment:"",
            temp:{}
        }
    }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        handleClick = () => {
                // id: this.state.id,
                const temp ={title:this.state.title,body:this.state.body,category:this.state.category,name:this.state.name,place:this.state.place,id:this.state.id,date:this.state.date,dateValue:this.state.dateValue,comment:this.state.comment}
                // date:Date(),
                // dateValue:Date.parse(Date())
            console.log(temp)
            this.props.edit(temp,this.state.id)
        }
        componentDidMount=()=>{
            let data = this.props.value.find((element) => element.id == this.props.match.params.id)

            this.setState({
                title:data.title,
                body:data.body,
                category:data.category,
                name:data.name,
                place:data.place,
                date:data.date,
                dateValue:data.dateValue, 
                id:data.id
           
            })
        }
        render() {
            return (
                <React.Fragment>
                    <Box border={1} style={{ width: "300px", textAlign: "center", margin: "100px 0px 0px 500px" }}>
                        <TextField id="standard-basic" label="Title" name="title" disabled value={this.state.title} onChange={this.handleChange} /><br></br>
                        <TextField id="standard-basic" label="Description" name="body"  disabled value={this.state.body} onChange={this.handleChange} /><br></br>
                        <label style={{marginRight:"20px"}}>Category</label>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select"disabled onChange={this.handleSelect}>
                            <MenuItem value={"Random"}>Random</MenuItem>
                            <MenuItem value={"General"}>General</MenuItem>
                            <MenuItem value={"Programming"}>Programming</MenuItem>
                            <MenuItem value={"Algorithm"}>Algorithm</MenuItem>
                            <MenuItem value={"Suggestions"}>Suggestions</MenuItem>
                        </Select>
                        <TextField id="standard-basic" label="Name" name="name"disabled value={this.state.name} onChange={this.handleChange} /><br></br>
                        <TextField id="standard-basic" label="Place" name="place"disabled value={this.state.place} onChange={this.handleChange} /><br></br>
                        <TextField id="standard-basic" label="Comment" name="comment" value={this.state.comment} onChange={this.handleChange} /><br></br>
                        <div style={{ marginTop: "20px" }}> <Button variant="contained" color="secondary" onClick={this.handleClick}>SUBMIT</Button></div>
                    </Box>
                    <Link to="/Table">Go back to table</Link>
                </React.Fragment>
            )
        }
    }
    const mapStateToProps = (state) => ({
        value:state.products
    })

    const mapDispatchToProps = dispatch => {
        return ({
            edit: (data,id) => dispatch(edit(data,id))
        })
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Add)

