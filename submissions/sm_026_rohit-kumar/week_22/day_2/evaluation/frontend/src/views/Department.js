import React from 'react'
import axios from 'axios'
import uuid from 'react-uuid'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

class Department extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            departments: []
        }
    }
    handleAdd = () => {
        const data = {
            dept_name: this.state.name,
            dept_uuid: uuid()
        }
        axios.post("http://localhost:5000/employee/department/add", data)
        .then(res => {
            this.loadData()
        })
    }

    loadData = () => {
        axios.get("http://localhost:5000/employee/department")
        .then(res => {
            this.setState({
                departments: res['data']['data']
            })            
        })
    }
    
    componentWillMount = () => {
        this.loadData()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    } 

    handleDelete = (id) => {
        console.log(id)
        const url = "http://localhost:5000/employee/department/delete"
        axios.delete(url, {
            headers: {Authorization : `Bearer ${this.props.token}`},
            data: {dept_id: id}

        })
        .then(res => {
            console.log(res)
            this.loadData()
        })
        .catch(err => console.log(err))
    }

    render() {
        // redirect if user not logged in
        if (! this.props.isLoggedIn) {
            return <Redirect to="/login"></Redirect>
        }


        return (
            <div>
                <div className='row mt-2'>
                    <div className='col-7 offset-2'>
                        <h3 className='bg-primary text-white p-3'>Add New Department.</h3>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-2 offset-2'>Name</div>
                    <div className='col-5'>
                        <input name="name" onChange={this.handleChange} value={this.state.name} type='text' placeholder='Enter Department Name' className='form-control'></input>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-7 offset-2'>
                        <button onClick={this.handleAdd} className='btn btn-primary form-control'>Add Department</button>
                    </div>
                </div>        
                <div className='row'>
                    <div className='col-6 offset-3'>
                        <table className='table mt-3'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Department</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.departments.map((item, index) => {
                                return  <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.dept_name}</td>
                                            <td><a href="#" onClick={() => {this.handleDelete(item.id)}}>delete</a></td>
                                        </tr>
                            })}
                            
                            </tbody>
                        </table>
                        
                    </div>
                </div>   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        token: state.data.token,
        menuLabel: state.menuLabel,
        showRegisterButton: state.showRegisterButton
    }
}

export default connect(mapStateToProps, null)(Department)

