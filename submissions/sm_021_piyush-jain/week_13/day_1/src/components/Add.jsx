import React, { Component } from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import { add } from './action'
import { connect } from 'react-redux'
import reducer from './reducer'
class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: 0,
            email: '',
            cibil: 0,
            amount: 0,
            type: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSelect = (e) => {
        this.setState({
            type: e.target.value
        })
    }
    render() {
        console.log("hi")
        return (
            <React.Fragment>
                <div>
                    <label>NAME:</label><br></br>
                    <input type="text" name="name" placeholder="ENTER THE NAME" value={this.state.name} onChange={this.handleChange}></input><br></br>
                    <label>AGE:</label><br></br>
                    <input type="text" name="age" placeholder="ENTER THE AGE" value={this.state.age} onChange={this.handleChange}></input><br></br>
                    <label>EMAIL:</label><br></br>
                    <input type="text" name="email" placeholder="ENTER THE EMAIL" value={this.state.email} onChange={this.handleChange}></input><br></br>
                    <label>CIBIL SCORE:</label><br></br>
                    <input type="text" name="cibil" placeholder="ENTER THE CIBIL SCORE" value={this.state.cibil} onChange={this.handleChange}></input><br></br>
                    <label>LOAN AMOUNT:</label><br></br>
                    <input type="text" name="amount" placeholder="ENTER THE LOAN AMOUNT" value={this.state.amount} onChange={this.handleChange}></input><br></br>
                    <select onChange={this.handleSelect}>
                        <option value="personal">Personal</option>
                        <option value="educational">Educational</option>
                        <option value="home">Home</option>
                        <option value="car">Car</option>
                    </select>
                    <button onClick={() => this.props.add(this.state)}>Submit</button>
                </div>
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return ({
        add: (data) => dispatch(add(data))
    })
}
export default connect(
    null, mapDispatchToProps
)(Add)