import React from 'react'

class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            gender: '',
            department: '',
            salary: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
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
                            <option value='select'>Select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-2 offset-2'>Department</div>
                    <div className='col-5'>
                        <select name="department" onChange={this.handleChange} value={this.state.department} className='form-control'>
                            <option value='select'>Select</option>
                            <option value='it'>IT</option>
                            <option value='hr'>HR</option>
                            <option value='finance'>Finance</option>
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

