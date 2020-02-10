import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Registration extends Component {
    constructor(props){
        super(props)
        this.state={
                name: "",
                email: "",
                password: "",
                username: "",
                mobile: "",
                description: ""
        }
    }
    handleChange=(e)=>{
        [e.target.name] = e.target.value
    }
    render() {
        return (

            <div>
                <input name ="name" value ={this.state.name} onChange ={this.handleChange}/>
                <input name ="email" value ={this.state.email} onChange ={this.handleChange}/>
                <input name ="password" value ={this.state.password} onChange ={this.handleChange}/>
                <input name ="username" value ={this.state.username} onChange ={this.handleChange}/>
                <input name ="mobile" value ={this.state.mobile} onChange ={this.handleChange}/>
                <input name ="description" value ={this.state.description} onChange ={this.handleChange}/>
                <button onClick={this.handleClick}>Register</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
