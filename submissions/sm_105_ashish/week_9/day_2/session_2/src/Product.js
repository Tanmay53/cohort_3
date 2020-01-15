import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Product extends Component {
    constructor(){
        super()
    }
    addCart = (e)=>{
        this.props.updateCart(e.target.value)
        }
    render() {
    const productObj = this.props.productArr.find((element) => Number(element.id) === Number(this.props.match.params.id))
    if(productObj){
        return(
            <React.Fragment>
                <div className="margin-auto text-center col-12"style = {{border : "1px solid black"}}>
                    <img className="m-4" src={productObj.url} alt="phone"/>
                    <p> Name : {productObj.name} </p>
                    <p> Price :Rs {productObj.price} </p>
                   <Link to={{
                       pathname:"/cart",
                       }} > <button onClick={this.addCart} value={[productObj.name,productObj.price]} className="btn btn-success">Add to cart</button></Link>
                </div> 
            </React.Fragment>
        )
    }
    else{
        return(
            <React.Fragment>
                <h1> Product not found, invalid id </h1>
            </React.Fragment>
        );
    }
    }
}
