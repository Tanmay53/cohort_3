import React from 'react'
import {Redirect} from 'react-router-dom'

class DisplayProduct extends React.Component{
    constructor(props){
        super(props)
        this.state={
            redirect:null
        }
    }
    handleClick=()=>{
        this.props.loadfunc(this.props.productData.find(element=>element.id===this.props.match.params.id))
        // alert("Product added to cart !")
    }
    render(){
    let productObj=this.props.productData.find(element=>element.id===this.props.match.params.id)

    if(productObj){
        return(
            <div className="container text-center">
               <div className="row">
                    <div className="col-10 offset-1 col-md-6 col-lg-4 my-2">
                        <div className="card border">
                            <div className="card-header">
                                <img src={productObj.url} alt={productObj.name} height="150"/>
                            </div>
                            <div className="card-body">
                                <h5>Name: {productObj.name}</h5>
                                <h5>Price: {productObj.price}</h5>
                                <h5>Description: {productObj.description}</h5>
                                <h5>Category: {productObj.category}</h5>
                                <h5>Sub-category: {productObj.subcategory}</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary" onClick={()=>this.handleClick()}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
    else{
        return(
            <Redirect  push to="/products"/>
        )
    }
}

}
export default DisplayProduct               