import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getcategories,sentdata} from '../Redux/actions'
import { Redirect } from 'react-router'

export class Addproducts extends Component {
    constructor (props){
        super(props)
        this.state={
            productname:"",
            category:"",
            price:""
        }
    }
    componentDidMount=()=>{
        this.props.getcategories("GET","http://localhost:5000/data/category",this.props.value.token)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick=()=>{
        let temp = {
            productname:this.state.productname,
            categoryid:this.state.category,
            price:this.state.price
        }
        this.props.sentdata("POST","http://localhost:5000/data/productdata",this.props.value.token,temp)
        }

    render() {
        console.log(this.props.value.categorylist,this.props.value.isloading)
        if (this.props.value.login){
        return (
            <div className="container ">
                <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 offset-xl-3 offset-lg-3 offset-md-0 offset-sm-0">
                    <div className="row text-center">
                        <div className="col-12 text-left">
                            <label>Productname</label>
                        </div>
                        <div className="col-12">
                            <input className="col-12 form-control" name="productname" value={this.state.productname} type="text" required onChange={this.handleChange} />
                        </div>
                        <div className="col-12 text-left">
                            <label>Price</label>
                        </div>
                        <div className="col-12">
                            <input className="col-12 form-control" name="price" value={this.state.price} type="text" required onChange={this.handleChange} />
                        </div>
                        <div className="col-12">
                            <select className="col-12 btn btn-danger mt-4" name="category" value={this.state.category} required onChange={this.handleChange}>
                                <option>select usertype</option>
                            {this.props.value.isloading && this.props.value.categorylist.map((ele)=> <option value={ele.id} key={ele.id}>{ele.type}</option>)}
                            </select>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success m-5" onClick={this.handleClick}>Add product</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
        else {
            return (
                <Redirect to="/login"/>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    value:state.loginreducer
    
})

const mapDispatchToProps = dispatch=>({
    getcategories:(M,U,A)=>dispatch(getcategories(M,U,A)),
    sentdata:(M,U,A,D)=>dispatch(sentdata(M,U,A,D))  
})

export default connect(mapStateToProps, mapDispatchToProps)(Addproducts)
