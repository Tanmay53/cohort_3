import React from 'react'
import axios from 'axios'


class Create extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            name: '',
            email: '',
            mobile: '',
            age: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    handleClick = () => {
        // make axios call here
        axios.post('http://localhost:5000/user/create', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,Authorization',
            'Access-Control-Allow-Methods': 'GET,POST,PATCH'
        }, 
        data: this.state})
        this.props.history.push('/user/listing')
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Add New User.</h3>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input name='name' value={this.state.name} onChange={this.handleChange} type='text' className='form-control' placeholder='Enter Name'></input>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input name='email' value={this.state.email} onChange={this.handleChange} type='email' className='form-control' placeholder='Enter Email'></input>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Mobile</label>
                            <input name='mobile' value={this.state.mobile} onChange={this.handleChange} type='text' className='form-control' placeholder='Enter Mobile'></input>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Age</label>
                            <select name='age' value={this.state.age} onChange={this.handleChange} className='form-control'>
                                <option value='18 - 25'>18 - 25</option>
                                <option value='26 - 30'>26 - 30</option>
                                <option value='31 - 35'>31 - 35</option>
                                <option value='36 - 40'>36 - 40</option>
                                <option value='41 - 45'>41 - 45</option>
                                <option value='46 - 55'>46 - 55</option>
                                <option value='56 - 60'>56 - 60</option>
                                <option value='66 - 70'>66 - 70</option>
                                <option value='71 - 75'>71 - 75</option>
                                <option value='76 - 80'>76 - 80</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <button onClick={this.handleClick} className='btn btn-primary'>Create</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Create