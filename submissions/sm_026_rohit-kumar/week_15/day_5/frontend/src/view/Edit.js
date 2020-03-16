import React from 'react'
import axios from 'axios'

class Edit extends React.Component {
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

    componentDidMount = () => {
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search)
        this.setState({
            name: query.get('name'),
            email: query.get('email'),
            mobile: query.get('mobile'),
            age: query.get('age')    
        })
    }

    handleUpdate = () => {
        const id = this.props.match.params['id']
        axios.patch(`http://localhost:5000/user/edit/${id}`, {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            mobile: this.state.mobile
        })
        .then(res => {
            this.props.history.push('/user/show/' + id)
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Please modify required fields</h3>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input name='name' onChange={this.handleChange} value={this.state.name} type='text' className='form-control' placeholder='Enter Name'></input>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input name='email' onChange={this.handleChange} value={this.state.email} className='form-control' placeholder='Enter Email'></input>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Mobile</label>
                            <input name='mobile' onChange={this.handleChange} value={this.state.mobile} type='text' className='form-control' placeholder='Enter Mobile'></input>
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
                            <button onClick={this.handleUpdate} className='btn btn-primary mr-3'>Update</button>
                            <button onClick={() => {this.props.history.push('/user/listing')}} className='btn btn-primary'>Go Back</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Edit