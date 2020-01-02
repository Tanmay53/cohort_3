import React from 'react'
import {connect} from 'react-redux'
import {addStaff} from '../Redux/Actions/Action'
import {Link} from 'react-router-dom'




class AddStaff extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            name: '',
            email: '',
            phone: '',
            sales:''
        }
    }

    handleClick = () => {
        this.props.addStaff(this.state)
        this.setState({
            name: '',
            email: '',
            phone: '',
            sales: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-8 offset-2'>
                        <h5>Add new staff here</h5>
                        <input name='name'  value={this.state.name} onChange={this.handleChange} type='text' className='form-control mt-2' placeholder='Enter Name'></input>
                        <input name='email' value={this.state.email} onChange={this.handleChange} type='text' className='form-control mt-2' placeholder='Enter Email'></input>
                        <input name='phone' value={this.state.phone} onChange={this.handleChange} type='text' className='form-control mt-2' placeholder='Enter Phone No'></input>
                        <input name='sales' value={this.state.sales} onChange={this.handleChange} type='text' className='form-control mt-2' placeholder='Enter Sales'></input>
                        <button onClick={this.handleClick} className='btn btn-outline-primary mt-2'>Submit</button>
                        <Link to='/' className='btn btn-outline-primary mt-2'>Home Page</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStaff: (obj) => dispatch(addStaff(obj))
    }
}

export default connect(null, mapDispatchToProps) (AddStaff)