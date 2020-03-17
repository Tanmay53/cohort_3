import React from 'react'
import axios from 'axios'
import uuid from 'react-uuid'

class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            gender: 'male',
            department: '0',
            salary: '',
            all_department: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    } 

    componentWillMount = () => {
        const url = "http://localhost:5000/employee/department"
        axios.get(url)
        .then(res => {
            this.setState({
                all_department: res['data']['data']
            })
            console.log(this.state)
        })
    }
    handleAdd = () => {
        if (this.state.department == '0') {
            return
        }
        // else proceed
        const data = {
            emp_name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            dept_id : this.state.department,
            salary: this.state.salary, 
            emp_uuid: uuid()
        }
        const url = "http://localhost:5000/employee/create"
        axios.post(url, data)
        .then(res => {
            if (res['data']['result'] == 'success') {
                this.setState({
                    name: '',
                    email: '',
                    salary: ''
                })
            }
        })
        
    }

    render() {
        return (
            <div>
                <div className='row mt-2'>
                    <div className='col-7 offset-2'>
                        <h3 className='bg-primary text-white p-3'>Add New Employee.</h3>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-2 offset-2'>Name</div>
                    <div className='col-5'>
                        <input name="name" onChange={this.handleChange} value={this.state.name} type='text' placeholder='Enter Name' className='form-control'></input>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-2 offset-2'>Email</div>
                    <div className='col-5'>
                        <input name="email" onChange={this.handleChange} value={this.state.email} type='text' placeholder = 'Enter Email' className='form-control'></input>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-2 offset-2'>Gender</div>
                    <div className='col-5'>
                        <select name="gender" onChange={this.handleChange} value={this.state.gender} className='form-control'>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-2 offset-2'>Department</div>
                    <div className='col-5'>
                        <select name="department" onChange={this.handleChange} value={this.state.department} className='form-control'>
                            <option value='0'>Select</option>
                            {this.state.all_department.map((item) => {
                                return <option value={item.id}>{item.dept_name}</option>
                            })}
                            
                        </select>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-2 offset-2'>Salary</div>
                    <div className='col-5'>
                        <input name="salary" onChange={this.handleChange} value={this.state.salary} type='text' placeholder='Enter Salary' className='form-control'></input>
                    </div>
                </div>     
                <div className='row mt-3'>
                    <div className='col-7 offset-2'>
                        <button onClick={this.handleAdd} className='btn btn-primary form-control'>Add Employee</button>
                    </div>
                </div>           
            </div>
        )
    }
}
export default Employee

