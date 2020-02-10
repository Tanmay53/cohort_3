import React from 'react';
import { Redirect, Route } from "react-router-dom";
//developer mode
const verbose = 1;
const InfoTelevision = (props) => {


    const productObj = props.data.find((element) => element.id === props.match.params.id);

    if (verbose) {
        console.log("InfoTV", props);
        console.log("InfoTV", props.match.params.id);
        console.log("InfoTV", props.data);
        console.log("Info TV islogged", props.islogged);
        console.log(productObj);
    }


    const specification = productObj.description.map((ele) => <li>{ele}</li>)

    //function  to add a product to  the cart
    const addToCart = () => {
        console.log("clicked")

        //         if (props.islogged)
        //     return <InfoTelevision />
        // else
        //     return <Redirect to="/component/login" />
    }

    return (
        <div>
            <h1 className="text-center m-3">Television</h1>
            <div className="row">
                <div className="col-12 col-lg-6 text-center">
                    <img src={productObj.images} className="img-fluid m-5" />

                    <h3 className="mb-5">₹ {productObj.price}</h3>
                </div>
                <div className="col-12 col-lg-6 ">
                    <h1 className="text-center">{productObj.brand}</h1>
                    <h4>Specification:</h4>
                    <ul>
                        {specification}
                    </ul>
                    <div className="text-center m-3">
                        <button className="btn btn-lg  btn-danger" onClick={addToCart}>Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default InfoTelevision;