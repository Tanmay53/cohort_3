import React from 'react'
import { connect } from 'react-redux';
import {updateInfo,editInfo} from '../../Redux/Action'
import {Link} from 'react-router-dom'

class update extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            title: "",
            date: "",
            body: "",
            category: "",
            userDetails: "",
            addComments: [],
            Comment:""
        }
         
    }
    componentDidMount=()=>{
        let id = this.props.match.params.id
        let obj = {}
        this.props.topic.forEach(function(ele){
            if(ele.id == id)
            {
                // console.log(ele)
                obj = ele
            }
        })
        // console.log("obj....",obj)
        this.setState({
            title: obj.title,
            date: obj.date,
            body: obj.body,
            category: obj.category,
            userDetails: obj.userDetails,
            addComments : obj.addComments
        })
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick=(e)=>{
        e.preventDefault()
        let id = this.props.match.params.id
        let Comment = this.state.Comment
        let obj = {
            title : this.state.title,
            date: this.state.date,
            body : this.state.body,
            category : this.state.category,
            userDetails : this.state.userDetails,
            addComments: [...this.state.addComments,Comment],
            id : id
        }
        // console.log(obj)
        this.props.editInfo(obj)
    }

    render()
    {
        // console.log(this.props)
        return(
            <div>
                <div className="bgLogin">
                    <h3 className="text-center mt-1">Question</h3>
                    <div className="mx-3">
                        <label className="ml-1 mt-3">Title</label>
                        <input className="form-control" value={this.state.title} onChange={this.handleChange} type="text" name="title" placeholder="Enter title" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Body</label>
                        <input className="form-control" value={this.state.body} onChange={this.handleChange} type="text" name="body" placeholder="Enter Body" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Category</label>
                        <select className="form-control" value={this.state.category} onChange={this.handleChange}  name="category" >
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
                        <input className="form-control" value={this.state.userDetails} onChange={this.handleChange} type="text" name="userDetails" placeholder="User Details" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Add Comments</label>
                        <input className="form-control" value={this.state.Comment} onChange={this.handleChange} type="text" name="Comment" placeholder="Add Comment" />
                    </div>
                    <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Update</button>
                    <Link to="/showtopic"><button className="btn btn-primary mt-3 ml-3 mb-3">Go Back</button></Link>
                </div>
                <br></br>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    topic: state.topic,
    isAuth: state.form
})

const mapDispatchToProps = (dispatch) => ({
    updateInfo : (payload) => (dispatch(updateInfo(payload))),
    editInfo : (payload) => (dispatch(editInfo(payload))),
})

export default connect(mapStateToProps,mapDispatchToProps)(update)