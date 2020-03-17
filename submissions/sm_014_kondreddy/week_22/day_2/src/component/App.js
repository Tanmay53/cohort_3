import React, { Component } from 'react'
import Register from "./Register"
import Login from "./Login"
import Table from "./Table"
import uuid from "uuid"
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:uuid(),
            source:'',
            destination:'',
            busnumber:'',
            schedule:'',
            busData:[]

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.reset()
        const newData = {
            id: this.state.id,
            source: this.state.source,
            destination: this.state.destination,
            busnumber: this.state.busnumber,
            schedule: this.state.schedule
        }
        const updatedData = [...this.state.busData, newData]
        this.setState({
            busData: updatedData,
            id: uuid()

        })
        
    }
    reset = () => {
        this.setState({
            source: '',
            destination: '',
            busnumber: '',
            schedule: ''
        })
    }
    render() {
        // console.log(this.state.busData)
        const {source,destination,busnumber,schedule}  = this.state
        return (
            <div>
                <div>
                    <h2 className = "text-primary text-center font-weight-bold font-italic">Registration Form</h2>
                    <Register />
                </div>
                <br /><br />
                <div>
                    <h4 className = "text-primary text-center font-weight-bold font-italic">Login Form</h4>
                    <Login />
                </div>
                <div className="container bg-success" style={{height:"150px",marginTop:"100px",marginBottom:"100px"}}>
                    <br />
                    <form className="mt-3" onSubmit={this.submitHandler}>
                        Source:
                        <input type="text" name ="source" value = {source} onChange={this.handleChange} />
                        Destination:
                        <input type ="text" name="destination" value = {destination} onChange={this.handleChange} />
                        Bus Number:
                        <input type="text" name = "busnumber" value ={busnumber} onChange={this.handleChange} />
                        Schedule : 
                        <input type="time" name = "schedule" value = {schedule} onChange = {this.handleChange} />
                        <br />
                        <button type="submit" className="col-3 btn btn-light mt-3 ml-5">submit</button>
                    </form>
                </div>
                <Table data={this.state.busData}/>
            </div>
            
        )
    }
}

export default App
