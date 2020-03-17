import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: 'all',
            department: 'all',
            sal_order: 'asc',
            employee: [],
            all_department: [],
            limit_beg: 0,
            limit_end: 20,
            buttons: []
        }
    }

    handleProbe = () => {
       axios.post("http://localhost:5000/employee/probe", {
            gender: this.state.gender, 
            department: this.state.department
        })
        .then(res => {
            // console.log('probe : ', res['data']['data'][0]['total_rec'])
            const total_rec = Number(res['data']['data'][0]['total_rec'])
            const total_buttons = Math.ceil(total_rec / 20) 

            this.setState({
                    buttons: [...Array(total_buttons).keys()].map(x => ++x)
            })
        })        
    }

    componentWillMount = () => {
        // probe
        this.handleProbe()


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
            sal_order: this.state.sal_order,
            limit_beg: this.state.limit_beg,
            limit_end: this.state.limit_end
        })
        .then(res => {
            console.log('laoddata : ', res)
            this.setState({
                employee: res['data']['data']
            })
        })
    }


    handleChange = async (event) => {
        await this.setState({
            [event.target.name]: event.target.value
        })
        await this.handleProbe()
        this.loadData()
    }

    handlePageClick = async (page) => {
        await this.setState({
            limit_beg: (page - 1 ) * 20,
            limit_end: page * 20 - 1
        })
        this.loadData()
    }

    render() {
        // redirect if user not logged in
        if (! this.props.isLoggedIn) {
            return <Redirect to="/login"></Redirect>
        }

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

                    <div className='col-1 offset-2'>
                        Salary
                    </div>
                    <div className='col-2'>
                        <select name="sal_order" onChange={this.handleChange} value={this.state.sal_order} className='form-control'>
                            <option value='asc'>Asc</option>
                            <option value='desc'>Desc</option>
                        </select>
                    </div>


                    <div className='col-1 mt-4'>
                        pages
                    </div>
                    
                    <div className='col-9 mt-4'>
                        {this.state.buttons.map(item => {
                            return <button 
                                    className='btn btn-primary btn-sm mx-1'
                                    onClick={() => this.handlePageClick(item)}
                                    >
                                        {item}
                                    </button>
                        })}
                    </div>
                    <div className='col-12 mt-3'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Emp ID.</th>
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
                                                <td>{item.id}</td>
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

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        menuLabel: state.menuLabel,
        showRegisterButton: state.showRegisterButton
    }
}


export default connect(mapStateToProps, null)(Dashboard)