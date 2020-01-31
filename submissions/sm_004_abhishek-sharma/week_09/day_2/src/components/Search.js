import React, { Component } from 'react'
import Table from './Table'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            user : "",
            clicked : false
        }
    }

    handleChange = (e) =>{
        this.setState({
          user : e.target.value,
          clicked : false
        })
    }

    handleSubmit = (name) =>{
        this.setState({
            user : name,
            clicked : true
        })
    }

    resetInput = () => {
        this.setState({ user : "" })
    }

    render() {
        return (
            <div className="container bg-light">
                <div className = "row my-3">
                    <div className = "col-8 offset-2">
                        <div className="row">
                            <div className="col text-center">
                                <h1>Github Search</h1>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-center">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Username" 
                                            aria-label="Username" aria-describedby="button-addon2"
                                            value = {this.state.user} 
                                            onChange = {this.handleChange}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button" 
                                            onClick = {() =>{this.handleSubmit(this.state.user)}} >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>                                                                                
                    </div> 
                </div>
                <div className = "row my-3 ">
                    <div className = "col-12">
                        {console.log(this.state.user)}
                        {this.state.clicked && <Table userSearch = {this.state.user} resetInput = {this.resetInput} /> }
                    </div>
                </div>  
            </div>
        )
    }
}
