import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../redux/action'
import { Redirect } from 'react-router-dom'

export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "",
             email : '',
             password : '',
             username : '',
             mobile : '',
             description : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = () => {
        let data = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            username : this.state.username,
            mobile : this.state.mobile,
            description : this.state.username   
        }
        this.props.register(data)
    }
    
    render() {
        return (
            <div className="container p-5 w-25">
                {
                    !this.props.register ? 
                    <Redirect to='/login' ></Redirect>
                    :
                    null
                }
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control mb-2" />
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control mb-2" />
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control mb-2" />
                <label htmlFor="">Mobile</label>
                <input type="number" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control mb-2" />
                <label htmlFor="">Description</label>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange} className="form-control mb-2" />
                <button className="btn btn-block btn-outline-warning">Register</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    register : state.register
})

const mapDispatchToProps = dispatch => ({
    register : (payload) => dispatch(register(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
