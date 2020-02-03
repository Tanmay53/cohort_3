import React from 'react'
import {connect} from 'react-redux'
import {editTopic} from '../Redux/actions'
import {Link} from 'react-router-dom'
import {TextField, TextareaAutosize, InputLabel, Select, Button, Box} from '@material-ui/core'

class EditTopic extends React.Component {
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
            add_comments: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            id: this.state.id,
            title: this.state.title,
            body: this.state.body,
            category: this.state.category,
            user_name: this.state.user_name,
            user_mobile: this.state.user_mobile,
            date_created: this.state.date_created,
            time_stamp: this.state.time_stamp,
            add_comments: this.state.add_comments
        })
        console.log(this.state)
        this.props.editTopic(this.state)
        this.props.history.push('/viewTopics')
    }

    componentDidMount() {

        let idx = this.props.match.params.id
        console.log(idx)
        console.log(this.props)
        let data = this.props.topics.topics.filter(e => e.id == idx)
        console.log(data)

        this.setState({
            id:data[0].id,
            title: data[0].title,
            body: data[0].body,
            category: data[0].category,
            user_name: data[0].user_name,
            user_mobile: data[0].user_mobile,
            date_created: data[0].date_created,
            time_stamp: data[0].time_stamp,
            add_comments: ''
        })
    }

    render() {
        return (
            <>
                <Box>
                <h5>Add Comments..!!</h5>
                        <TextField 
                            variant="outlined"
                            margin='dense'
                            name='title' 
                            disabled
                            value={this.state.title} 
                            onChange={this.handleChange} 
                            type='text' 
                            label='Enter Topic Title..'></TextField>
                            <br/>

                        <TextareaAutosize aria-label="minimum height" rowsMin={6} placeholder="Minimum 3 rows"  margin='dense' disabled
                        name='body'
                        value={this.state.body} 
                        onChange={this.handleChange} />

                        <br />
                            <Select
                                margin='dense'
                                native
                                name='category'
                                disabled
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
                            disabled
                            value={this.state.user_name} 
                            onChange={this.handleChange} 
                            type='text'
                            variant="outlined"
                            label='Enter User Name'></TextField>
                            <br/>
                        <TextField 
                            margin='dense'
                            name='user_mobile'
                            disabled 
                            value={this.state.user_mobile} 
                            onChange={this.handleChange} 
                            type='number'
                            variant="outlined"
                            label='Enter Mobile Number'></TextField>
                            <br/>
                        <TextField 
                            margin='dense'
                            name='add_comments' 
                            
                            value={this.state.add_comments} 
                            onChange={this.handleChange} 
                            type='text'
                            variant="filled"
                            label='Enter Your Comments'></TextField>
                            <br/>
                        <Button variant='outlined' onClick={this.handleClick}>Submit</Button>
                        <br/>
                        <Link to='/'>Dashboard Page</Link>
                </Box>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        topics: state.topics
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editTopic: (obj) => dispatch(editTopic(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditTopic)