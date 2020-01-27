import React from 'react'
import { connect } from 'react-redux';
import {addTopic} from '../../Redux/Action'
import {Redirect} from 'react-router-dom'

class AddNewTopic extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            title: "",
            body: "",
            category: "",
            userDetails: "",
            addComments: []
        }
         
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick=(e)=>{
        e.preventDefault()
        let dateId = Date.now()
        let date = new Date().toLocaleTimeString()
        let obj = {
            title : this.state.title,
            date: date,
            body : this.state.body,
            category : this.state.category,
            userDetails : this.state.userDetails,
            addComments : this.state.addComments,
            id : dateId
        }
        // console.log(obj)
        this.props.addTopic(obj)
    }

    render()
    {
        return(
            this.props.isAuth ? (
            <div>
                <div className="bgLogin">
                    <h3 className="text-center mt-1">Vehicle Data Form</h3>
                    <div className="mx-3">
                        <label className="ml-1 mt-3">Title</label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="title" placeholder="Enter title" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Body</label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="body" placeholder="Enter Body" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Category</label>
                        <select className="form-control" onChange={this.handleChange}  name="category" >
                                <option selected="choose category">Choose category</option>
                                <option value="Random">Random</option>
                                <option value="General">General</option>
                                <option value="Programming">Programming</option>
                                <option value="Algorithm">Algorithm</option>
                                <option value="Suggestions">Suggestions</option>
                        </select>
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">User Details</label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="userDetails" placeholder="User Details" />
                    </div>
                    <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Add Topic</button>
                </div>
                <br></br>
            </div>
            ):
            (
                <Redirect to="/login" />
            )
        )
    }
}

const mapStateToProps = (state) => ({
    topic: state.topic,
    isAuth: state.form
})

const mapDispatchToProps = (dispatch) => ({
    addTopic : payload => (dispatch(addTopic(payload)))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddNewTopic)