import React, { Component } from 'react'
import axios from "axios"
import {Link}  from 'react-router-dom'


class FormPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             item_name :'',
             quantity:0
        }
    }
    
    handleChange  = (e) =>{
     this.setState({
         [e.target.name]:e.target.value
     })
    }
    sendData = () =>{
        axios.post("http://127.0.0.1:5000/create",{...this.state})
        .then(res=>{
            alert(res.data.msg)
            this.props.updateState()
            this.setState({
              item_name:'',
              quantity:''
            })
        })
    }
    render() {
        return (
                 <div className="col-6 m-auto">
                    <form onSubmit ={e=>e.preventDefault()} className ="border border-dark m-2 p-4 bg-light">
                      <p className="h4 text-center py-4">ADD ITEMS</p>
                      <label
                        htmlFor="item"
                        className="grey-text font-weight-light"
                      >
                        Item name
                      </label>
                      <input
                        name = "item_name" 
                        onChange = {this.handleChange}
                        type="text"
                        id="item"
                        className="form-control"
                      />
                      <br />
                      <label
                        htmlFor="quantity"
                        className="grey-text font-weight-light"
                      >
                        Quantity
                      </label>
                      <input
                        name ="quantity" 
                        onChange = {this.handleChange}
                        type="text"
                        id="quantity"
                        className="form-control"
                      />
                      <div className="text-center py-4 mt-3">
                        <button 
                        className="btn btn-success form-control"
                        onClick={this.sendData}
                        type="submit">
                          Add item
                        </button>
                      </div>
                    </form>
                    <Link className="btn btn-dark m-2" to ="/">Back to Home page</Link>
                  </div>
        );
        
    }
}

export default FormPage;