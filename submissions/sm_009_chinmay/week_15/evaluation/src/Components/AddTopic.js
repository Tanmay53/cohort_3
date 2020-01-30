import React from 'react'
import {connect} from 'react-redux'
import {addTopic} from '../Redux/actions'
import {Link} from 'react-router-dom'
import {TextField, TextareaAutosize, InputLabel, Select, Button, Box} from '@material-ui/core'

class AddTopic extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            id:0,
            title: '',
            body: '',
            category: '',
            user_name: '',
            user_mobile: '',
            date_created: Date(),
            time_stamp: 0,
            add_comments: 'Click on title to add comment..!!'
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            id:Math.random()*100,
            title: '',
            body: '',
            category: '',
            user_name: '',
            user_mobile: '',
            date_created: Date(),
            time_stamp: Date.parse(this.state.date_created),
            add_comments: 'Click on title to add comment..!!'
        })
        this.props.addTopic(this.state)
    }

    render() {
        return (
            <>
                <Box>
                <h2>Add new Topic..</h2>
                        <TextField 
                            variant="outlined"
                            margin='dense'
                            name='title' 
                            value={this.state.title} 
                            onChange={this.handleChange} 
                            type='text' 
                            label='Enter Topic Title..'></TextField>
                            <br/>

                        <TextareaAutosize aria-label="minimum height" rowsMin={4} placeholder="Enter topic body here.."  margin='dense' style={{borderRadius:'5px'}}
                        name='body'
                        value={this.state.body} 
                        onChange={this.handleChange} />

                        <br />
                            <Select
                                margin='dense'
                                native
                                name='category'
                                value={this.state.category}
                                onChange={this.handleChange}
                                >
                                    <option>Select Category</option>
                                    <option value='Random'>Random</option>
                                    <option value='General'>General</option>
                                    <option value='Programming'>Programming</option>
                                    <option value='Algorithms'>Algorithms</option>
                                    <option value='Suggestions'>Suggestions</option>
                            </Select>

                        <br />
                        <TextField 
                            margin='dense'
                            name='user_name' 
                            value={this.state.user_name} 
                            onChange={this.handleChange} 
                            type='text'
                            variant="outlined"
                            label='Enter Name'></TextField>
                            <br/>
                        <TextField 
                            margin='dense'
                            name='user_mobile' 
                            value={this.state.user_mobile} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Enter Mobile Number'></TextField>
                            <br/>
                        <Button variant='outlined' onClick={this.handleClick}>Submit</Button>
                        <br/>
                        <Link to='/'>Dashboard Page</Link>
                </Box>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTopic: (obj) => dispatch(addTopic(obj))
    }
}

export default connect(null, mapDispatchToProps) (AddTopic)