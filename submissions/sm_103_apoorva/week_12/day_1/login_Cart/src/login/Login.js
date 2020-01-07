import React from 'react'
import Form from './Form'
class Login extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name : "apoorva15997@gmail.com",
            pass : "krsna123",
           
        }
    }

    render()
    {
        return(
            <div>
                <Form username ={this.state.name} password = {this.state.pass} />
            </div>
        )
    }
    
}

export default Login