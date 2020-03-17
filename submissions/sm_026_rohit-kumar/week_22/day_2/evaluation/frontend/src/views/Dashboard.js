import React from 'react'
import Employee from './Employee'
import axios from 'axios'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: 'all',
            department: 'all',
            sal_order: 'asc',
            employee: [],
            all_department: []
        }
    }

    componentWillMount = () => {
        // fetch departments
        const url = "http://localhost:5000/employee/department"
        axios.get(url)
        .then(res => {
            this.setState({
                all_department: res['data']['data']
            })
            console.log(this.state)
        })
        
        // load data in table
        this.loadData()
    }

    loadData = () => {
        // fetch employees data
        axios.post("http://localhost:5000/employee/fetch", {
            gender: this.state.gender, 
            department: this.state.department,
            sal_order: this.state.sal_order
        })
        .then(res => {
            console.log(res)
            this.setState({
                employee: res['data']['data']
            })
        })
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidUpdate = () => {
        this.loadData()
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-1'>
                        Gender  
                    </div>
                    <div className='col-2'>
                        <select name="gender" onChange={this.handleChange} value={this.state.gender} className='form-control'>
                        <option value='all'>All</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>

                    <div className='col-2'>
                        Department  
                    </div>
                    <div className='col-2'>
                        <select name="department" onChange={this.handleChange} value={this.state.department} className='form-control'>
                            <option value='all'>All</option>
                            {this.state.all_department.map((item) => {
                                return <option value={item.id}>{item.dept_name}</option>
                            })}                            
                        </select>
                    </div>

                    <div className='col-1'>
                        Salary
                    </div>
                    <div className='col-2'>
                        <select name="sal_order" onChange={this.handleChange} value={this.state.sal_order} className='form-control'>
                            <option value='asc'>Asc</option>
                            <option value='desc'>Desc</option>
                        </select>
                    </div>




                    
                    <div className='col-12 mt-3'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employee.map((item, index) => {
                                    return <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.emp_name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.dept_name}</td>
                                                <td>{item.salary}</td>
                                                
                                                <td><a href="#" onClick={() => this.handleDelete(item.emp_uuid)}>delete</a></td>
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

export default Dashboard