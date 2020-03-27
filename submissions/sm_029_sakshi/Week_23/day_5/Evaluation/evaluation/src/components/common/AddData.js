import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addData } from "./../../redux/action";

class AddData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            gender : "",
            salary : "",
            department:""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let obj={
            id:Date.now(),
            name : this.state.name,
            gender : this.state.gender,
            salary : this.state.salary,
            department:this.state.department
        }
        this.props.addData(obj)
    }

    render() {
     
        console.log(this.state);
        return (
            <div>
                <div className="container-fluid  p-4">
                    <h1 className="text-center text-danger">Add New Data</h1>
                    <Link to='/home'><button className='btn btn-success float-right'>Home</button></Link>
                </div>
               
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="row border border-dark bg-success p-5 mt-5">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Enter Employee Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control p-2" placeholder="Enter Employee Name" />
                                </div>
                                <div className="form-group">
                                    <label>Enter Gender</label>
                                    <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} className="form-control p-2" placeholder="Enter Gender" />
                                </div>
                                <div className="form-group">
                                    <label>Enter salary</label>
                                    <input type="number" name="salary" value={this.state.salary} onChange={this.handleChange} className="form-control p-2" placeholder="Enter Salary" />
                                </div>
                                <div className="form-group">
                                    <label>Select Artist</label>
                                    <select className="custom-select" name="department" value={this.state.department} onChange={this.handleChange} >
                                        {this.props.departmentData.map((item)=><option key={item.id} value={item}>{item}</option>)}
                                    </select>
                                </div>
                                <button type="submit" className="btn-block p-2 btn-warning">Add new data</button>
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    departmentData: state.departmentData
})

const mapDispatchToProps = dispatch => ({
    addData : (payload)=> dispatch(addData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddData)