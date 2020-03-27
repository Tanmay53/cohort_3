import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addEmployee } from "../../redux/action";

class AddEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            gender : "",
            department : "",
            salary : ''
        }
    }

    handelChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.props.addEmployee(this.state)
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="container-fluid bg bg-dark p-4">
                    <div className="text-center display-3 text-white">Add Employee</div>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="row mt-5">
                            <form onSubmit={this.handelSubmit}>
                                <div className="form-group">
                                    <label>Enter Name</label>
                                    <input type="text" name="name" value={this.state.album} onChange={this.handelChange} className="form-control px-5" placeholder="Enter Album Name" />
                                </div>
                                <div className="form-group">
                                    <label>Enter Year</label>
                                    <select className="custom-select px-3" name="gender" value={this.state.gender} onChange={this.handelChange} >
                                        {["Male","Female"].map((item,index)=><option key={item+index} value={item}>{item}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Select Artist</label>
                                    <select className="custom-select px-3" name="department" value={this.state.department} onChange={this.handelChange} >
                                        {this.props.departmentData.map((item,index)=><option key={item+index} value={item}>{item}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Enter Salary</label>
                                    <input type="number" name="salary" value={this.state.salary} onChange={this.handelChange} className="form-control px-3" placeholder="Enter Salary" />
                                </div>
                                <button type="submit" className="btn-lg btn-block p-2 btn-secondary">Create Employee</button>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center p-5">
                        <Link to='/home'><button className='btn btn-danger px-5 py-2'>Go to Home</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    departmentData : state.departmentData
})

const mapDispatchToProps = dispatch => ({
    addEmployee : (payload)=> dispatch(addEmployee(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)