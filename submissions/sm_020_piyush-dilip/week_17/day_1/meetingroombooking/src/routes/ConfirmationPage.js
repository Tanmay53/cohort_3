import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class ConfirmationPage extends Component {
    componentDidMount(){
       this.timeout =  setInterval(() => {
            this.props.history.push('/')
        }, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.timeout)
    }
    render() {
        return (
            <div className="container p-5 text-center">
                <p className="text-muted">Redirecting to homepage...</p>
                <h1 className="text-dark">Your booking is done !!</h1>
            </div>
        )
    }
}
