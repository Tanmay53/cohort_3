import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addDepartment } from '../../redux/action'

class AddDepartment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            department : ""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addDepartment(this.state.department)
    }

    render() {
        //console.log(this.state)
        return (
            <div>
                <div className="container-fluid  p-4">
                    <h1 className="text-center text-danger">Add Department</h1>
                </div>

                <div className="container">
                  
                        <div className="d-flex justify-content-center">
                            <div className="row mt-5">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Enter Department Name</label>
                                        <input type="text" name="department" value={this.state.department} onChange={this.handleChange} className="form-control p-4" placeholder="Name" />
                                    </div>
                                    <button type="submit" className="btn-block p-2 btn-success">Add Department</button>
                                </form>
                            </div>
                        </div>
                
                    <div className="d-flex justify-content-center p-5">
                        <Link to='/home'><button className='btn btn-success'> Go to HomePage</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    addDepartment : (payload)=> dispatch(addDepartment(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDepartment)