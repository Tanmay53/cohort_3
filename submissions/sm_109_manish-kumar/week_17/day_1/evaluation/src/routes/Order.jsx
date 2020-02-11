import React, { Component } from 'react'

export default class Order extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            dateFrom:"",
            dateTo:""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    
    render() {
        return (
            <div className ="row" >
                <div className="col"></div>
                    <div className = "col mt-4" style={{backgroundColor: "lightgrey"}}>
                        <form>
                            <fieldset>
                                {/* <legend className = "m-2">Sign Up</legend> */}
                                
                                    {/* <label htmlFor="name">Name</label>
                                    <input type="text" id="name" className = "form-control m-2" 
                                            onChange ={this.handleChange} value ={this.state.name} name = "name" />
                                 */}
                                    <label htmlFor="datefrom">Date from :</label>
                                    <input type="date" id="datefrom" className = "form-control m-2"
                                            onChange= {this.handleChange} value={this.state.dateFrom} name ="dateFrom" />
                                
                                    <label htmlFor="dateto">Date to:</label>
                                    <input type="date" id="dateto" className = "form-control m-2"
                                            onChange={this.handleChange} value={this.state.dateTo} name="dateTo" />
                                
                                    <input type="submit" className ="m-2" onClick = {this.handleSubmit}/>
                                
                            </fieldset>
                        </form>
                    </div>
                <div className="col"></div>
            </div>
            )
        }
    }
