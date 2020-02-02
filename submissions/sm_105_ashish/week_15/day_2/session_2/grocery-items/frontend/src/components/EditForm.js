import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"


class EditPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             item_name :'',
             quantity:''
        }
    }
    componentDidMount =()=>{
       this.props.arr.forEach((ele,index)=>{
        if((index+1) == Number(this.props.match.params.id)){
          return (
            this.setState({
              item_name:ele.item_name,
              quantity:ele.quantity
          })
          )
        }})
    
     
  }
    handleChange  = (e) =>{
     this.setState({
         [e.target.name]:e.target.value
     })
    }
  
    sendData = (e) =>{
        axios.post("http://127.0.0.1:5000/edit/"+e,{...this.state})
        .then(res=>{
            alert(res.data.msg)
            this.props.updateState()
        })
    }
    render() {
        return (
                  <div className="col-6 m-auto">
                    <form onSubmit ={e=>e.preventDefault()} className ="border border-dark m-2 p-4 bg-light">
                      <p className="h4 text-center py-4">UPDATE ITEMS</p>
                      <label
                        htmlFor="item"
                        className="grey-text font-weight-light"
                      >
                        Item name
                      </label>
                      <input
                        name = "item_name" 
                        value = {this.state.item_name}
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
                        value  = {this.state.quantity}
                        name ="quantity" 
                        onChange = {this.handleChange}
                        type="text"
                        id="quantity"
                        className="form-control"
                      />
                      <div className="text-center py-4 mt-3">
                        <button 
                        value={Number(this.props.match.params.id)}
                        className="btn btn-success form-control"
                        onClick={(e)=>this.sendData(e.target.value)}
                        type="submit">
                          UPDATE
                        </button>
                      </div>
                    </form>
                    <Link className="btn btn-dark m-2" to ="/">Back to Home page</Link>
                  </div>  
        );
        
    }
}

export default EditPage;