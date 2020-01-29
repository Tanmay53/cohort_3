import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Select,MenuItem, FormControl} from '@material-ui/core';
import { DeleteItem, SortItem } from './../../reducer/action'


class ViewTopic extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : ""
        }
    }
    
    handelChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        this.props.SortItem(this.state.name)
    }

    render() {
        console.log("taa", this.props.mainData)
        return (
            <Container>
                <TableContainer>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Body</TableCell>
                                <TableCell align="right">Category
                                    <FormControl variant='outlined' >
                                        <Select labelId="demo-simple-select-label" name="category" value={this.state.category} onChange={this.handelChange}>
                                            <MenuItem value={"acc"}>Accending</MenuItem>
                                            <MenuItem value={"dec"}>Decending</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="right">User Details</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.mainData.map((item, index) => (
                                <TableRow key={Math.random()}>
                                    <TableCell component="th" scope="row">
                                        {item.title}
                                    </TableCell>
                                    <TableCell align="right">{item.body}</TableCell>
                                    <TableCell align="right">{item.category}</TableCell>
                                    <TableCell align="right">{item.userDetails}</TableCell>
                                    <TableCell align="right"><button onClick={() => this.props.DeleteItem(index)}>Delete</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
        SortItem : (data) => dispatch(SortItem(data))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTopic)