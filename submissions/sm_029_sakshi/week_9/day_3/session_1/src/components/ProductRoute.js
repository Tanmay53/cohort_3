import React from "react";
import Product from "./Product";

export default function ProductRoute(props) {
    const prodObj = props.productArr.find(
        ele => ele.id === props.match.params.id
    );

    if (prodObj) {
        console.log("prodObj:", prodObj);
        return (
            <React.Fragment>
                <Product
                    img={prodObj.img}
                    name={prodObj.name}
                    price={prodObj.price}
                 
                />
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1 className="mt-5 bg bg-danger">404, Page not found</h1>
            </React.Fragment>
        );
    }
}
