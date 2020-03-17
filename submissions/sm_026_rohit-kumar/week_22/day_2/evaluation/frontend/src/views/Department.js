import React from 'react'
import axios from 'axios'

class Department extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            all_department: []
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
            </div>
        )
    }
}
export default Department

