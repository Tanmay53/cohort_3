import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function ProductList(props) {
    console.log(props);
    return (
        <React.Fragment>
            <h2>Products</h2>
            <div className="container">
                <div className="row">
                    {props.productArr.map(ele => {
                        return (
                            <div className="col-3" key={ele.id}>
                                <Link to={`${props.match.url}/${ele.id}`}>
                                    <Card
                                        img={ele.img}
                                        name={ele.name}
                                        title={ele.price}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}
