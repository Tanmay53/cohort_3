import React from "react";
import Products from "./Products";
export default function ProductRoute(props) {
    const prodObj = props.productArr.find(
        ele => ele.id === props.match.params.id
    );

    if (prodObj) {
        console.log("prodObj:", prodObj);
        return (
            <React.Fragment>
                <Products
                    img={prodObj.img}
                    name={prodObj.name}
                    price={prodObj.price}
                    description={prodObj.description}
                />
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1>404, Page not found</h1>
            </React.Fragment>
        );
    }
}
