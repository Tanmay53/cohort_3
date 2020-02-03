import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Select, MenuItem, InputLabel, FormControl, Button } from '@material-ui/core';
import { DeleteItem, SortItem, FilterItem } from './../../reducer/action'


const center = {
    marginLeft: "auto", marginRight: "auto", display: "block", padding: 20, marginTop: 30,
}

class ViewTopic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleVal: "",
            category: "",
            filterCategory: ""
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },()=>console.log(this.state))
        if (e.target.value === 'acc')
            this.props.SortItem('acc');
        else if (e.target.value === 'dec')
            this.props.SortItem('dec');
        else if (e.target.value === 'Accending')
            this.props.SortItem('Accending');
        else if (e.target.value === 'Decending')
            this.props.SortItem("Decending");

    }

    handelFilter = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.FilterItem(e.target.value)
    }


    render() {
        // console.log("filter", this.props.mainData)
        return (
            <Container>
                <TableContainer>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title
                                    <FormControl variant='outlined' >
                                        <InputLabel >Title Order</InputLabel>
                                        <Select style={{ width: 130, height: 40 }} name="titleVal" value={this.state.titleVal} onChange={this.handelChange}>
                                            <MenuItem value={"acc"}>Accending</MenuItem>
                                            <MenuItem value={"dec"}>Decending</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="right">Created Date
                                    <FormControl variant='outlined' >
                                        <InputLabel >Select Order</InputLabel>
                                        <Select style={{ width: 130, height: 40 }} name="category" value={this.state.category} onChange={this.handelChange}>
                                            <MenuItem value={"Accending"}>Accending</MenuItem>
                                            <MenuItem value={"Decending"}>Decending</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>

                                <TableCell align="right">Body</TableCell>
                                <TableCell align="right">Category
                                    <FormControl variant='outlined' >
                                        <InputLabel >Select</InputLabel>
                                        <Select style={{ width: 120, height: 40 }} name="filterCategory" value={this.state.filterCategory} onChange={this.handelFilter}>
                                            <MenuItem value={"All"}>All</MenuItem>
                                            <MenuItem value={"Random"}>Random</MenuItem>
                                            <MenuItem value={"General"}>General</MenuItem>
                                            <MenuItem value={"Programming"}>Programming</MenuItem>
                                            <MenuItem value={"Algorithm"}>Algorithm</MenuItem>
                                            <MenuItem value={"Suggestions"}>Suggestions</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="right">User Details</TableCell>
                                <TableCell align="right">Delete</TableCell>
                                <TableCell align="right">Add Comment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {console.log(this.props)}
                            {this.props.mainData.map((item, index) => (
                                <TableRow key={Math.random()}>
                                    <TableCell align="right">{item.title}</TableCell>
                                    <TableCell align="right">{item.createdTime}</TableCell>
                                    <TableCell align="right">{item.body}</TableCell>
                                    <TableCell align="right">{item.category}</TableCell>
                                    <TableCell align="right">{item.userDetails}</TableCell>
                                    <TableCell align="right"><button onClick={() => this.props.DeleteItem(index)}>Delete</button></TableCell>
                                    <TableCell align="right"><Link to= {`${this.props.match.url}/${item.createdTime}`}>
                                        <button>Add Comment</button>
                                        </Link>
                                            {item.commentData.map((ele,index) => <li key={item+index}>{ele}</li>)}
                                        </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Link to='/dashboard'><Button variant='outlined' style={center}>Go To DashBoard</Button></Link>
            </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    mainData: state.mainData
})

const mapDispatchToProps = dispatch => {
    return {
        DeleteItem: (index) => dispatch(DeleteItem(index)),
        SortItem: (data) => dispatch(SortItem(data)),
        FilterItem: (data) => dispatch(FilterItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTopic)