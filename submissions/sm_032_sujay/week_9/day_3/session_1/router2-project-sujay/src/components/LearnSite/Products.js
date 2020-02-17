import React from 'react'

import {Route,Link} from 'react-router-dom'

import ProductArr from './ProductArr'
// const Products = (props) => 
// {
//  return(
//      <div className="container-fluid bag-dark text-info">
   

//      <div className="row">
//      <div className="col-2 m-2 shadow ">
//     <h5> Electronics </h5>
//      </div>
//      <div className="col-2 shadow m-2">
//         <h5>  Clothing </h5>
//      </div>

//      <div className="col-2 shadow m-2">
//      <h5> Travel Gear </h5>
//      </div>
//      <div className="col-2 shadow m-2">
//      <h5> Essentials </h5>
//      </div>


//      </div>
//      </div>
//  )
// }

const Products = (props) =>{
    console.log(props)
    const productObj = ProductArr.find((element) => element.id == props.match.params.id) //This line makes sure that products are only displayed if they are found!
    if(productObj){
        return(
            <React.Fragment>
                <div >
                    <p> Name : {productObj.name} </p>
                    <p> Price : {productObj.price} </p>
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
    


export default Products