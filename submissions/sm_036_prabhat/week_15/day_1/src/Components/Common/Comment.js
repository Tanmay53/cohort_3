import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Container, Typography, Paper, TextField, Button } from '@material-ui/core';
import { addComment } from './../../reducer/action'


const center = {
    marginLeft: "auto",marginRight:"auto",display:"block", padding :50, marginTop : 50,width : 800
}
const commentButton = {
    marginLeft: "auto",marginRight:"auto",display:"block", padding :20, marginTop : 20,
}
const commentBox = {
    marginLeft: 200, marginTop:50, width : 400, height : 100
}


class Comment extends Component {
    constructor(props){
        super(props)
        this.state = {
            commentData : '',
            idx : ''
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handelClick = () => {
        this.props.addComment({
            "comment" : this.state.commentData,
            'idx' : this.state.idx
        })
    }

    componentDidMount () {
        let idx = this.props.match.params.id
        console.log("idx", idx)
        // let data  = this.props.mainData.find(item => item.createdTime == idx)
        // console.log("filter", data)
        this.setState({
            idx : idx
        })
    }

    render() {
        console.log(this.state.commentData);
        console.log(this.props.mainData)
        return (
            <Container>
                <Paper elevation={10} style={center}>
                <Typography variant='h2' align='center'>Write Your Comment</Typography>
                    <TextField variant='outlined' label='Write Comment .....' style={commentBox} name = 'commentData' value={this.state.commentData} onChange={this.handelChange}></TextField>
                    <Button style = {commentButton} variant='outlined' onClick={this.handelClick}>Submit Comment</Button>
                    <Link to='/dashboard/viewtopic'><Button variant='outlined' style={commentButton}>Go Back To Table Page</Button></Link>
                </Paper>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    mainData : state.mainData
})

const mapDispatchToProps = dispatch => {
    return{
        addComment : (data) => dispatch(addComment(data))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Comment)