import React, { Component } from 'react'
import queryString from 'query-string'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import {Link} from "react-router-dom"


export class EditItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            item:'',
            quantity:""
        }
    }
    componentDidMount() {
            const values = queryString.parse(this.props.location.search)
            console.log(values)
            this.setState({
                item:values.item,
                quantity:values.quantity
            })
          }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleEdit = ()=>{
        const {item , quantity} = this.state
        const config = {   
        method: 'POST',
        url:`/edit/${this.props.match.params.id}`,
        baseURL:"http://127.0.0.1:5000",
        headers: {
            'Content-Type': 'application/json',
        }
        ,data:{
            "item":item,
            "quantity":quantity
        }

    }
    axios(config).then(res=>{
         alert(res.data.message)
    })
   
    }
        render() {
            return (
              <div className="container d-flex flex-column justify-content-center align-items-center p-5">
                <Link className="btn btn-outline-dark m-2 col-2" to="/home">Back To table</Link>
                <form className="flex-column col-md-5 col-12 bg-light  border p-2 d-flex">
                  <h2 className="text-center text-danger">Add Grocery Item</h2>
                  <TextField
                    className=" m-2"
                    id="outlined-basic"
                    onChange={this.handleChange}
                    name="item"
                    label="Item Name"
                    variant="outlined"
                    value={this.state.item}
                  />
        
                  <TextField
                    className=" m-2"
                    id="outlined-basic"
                    onChange={this.handleChange}
                    name="quantity"
                    label="Quantity"
                    variant="outlined"
                    value={this.state.quantity}
                  />
                  
                  <Button
                    onClick={this.handleEdit}
                    variant="outlined"
                    className="py-2  m-2 bg-dark text-white"
                    color="primary"
                  >
                    Update
                  </Button>
                </form>
              </div>
            );
    }
}

export default EditItem


