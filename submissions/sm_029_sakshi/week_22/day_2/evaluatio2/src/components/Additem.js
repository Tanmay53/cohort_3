import React, { Component } from 'react'
import {data} from '../Redux/action'
import {connect} from 'react-redux'

class Additem extends Component {
    constructor(props){
        super(props)
            this.state={
             name: "",
             location:"",
             jobtitle:"",
             opening:"",
             salary:"",
            }
        }
     
        handleChange = (e) => {
         this.setState({ [e.target.name]: e.target.value })
     }
 
     handlereset = (e) => {
         e.preventDefault()
         this.setState({
             name: "",
             location:"",
             jobtitle:"",
             opening:"",
             salary:"",
            
         })
     }
 
     handleSubmit =(e) =>{
         e.preventDefault()
         var obj = {
             id: Date.now(),
             name: this.state.name,
             location: this.state.location,
             jobtitle: this.state.jobtitle,
             opening: this.state.opening,
             salary: this.state.salary
 
         }
       console.log(obj)
       this.props.form(obj)
     }
 
     handleShow=()=>{
    
     }
    render() {
        return (
            <div>
                 <div className="col-5 border border-dark d-flex justify-content-center"> 
                                <form id="form " onSubmit={this.handleSubmit}>
                                    <h1>Enter New Data Here</h1>
                                    <div className="form-group">
                                        <label>Company name</label>
                                        <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.handleChange} placeholder="Enter Total Deposit"
                                            required></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input type="text" name="location" value={this.state.location} className="form-control" onChange={this.handleChange} placeholder="Enter Month Name"
                                            required></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Job title</label>
                                        <input type="text" className="form-control" name="jobtitle" value={this.state.jobtitle} onChange={this.handleChange} placeholder="Enter Monthly Income" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Openings</label>
                                        <input type="number" className="form-control" name="opening" value={this.state.opening} onChange={this.handleChange} placeholder="Enter Monthly Expense" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input type="number" className="form-control" name="salary" value={this.state.salary} onChange={this.handleChange} placeholder="Enter Monthly Expense" required></input>
                                    </div>
                                    <input type='submit'/>
                                    {/* <button className="btn btn-success offset-1 text-center" onClick={this.handleSubmit}>Submit</button> */}
                                    <button className="btn btn-success offset-1 text-center" onClick={this.handleShow}>show in table</button>
                                    <button className="btn btn-danger offset-1" onClick={this.handlereset}>Reset</button>

                                </form>
                        </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    login : state.isloggedin,
    profileedata:state.profiledata,
    alldata:state.maindata
})

const mapDispatchToProps = dispatch => ({
    form:payload => dispatch(data(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Additem)
