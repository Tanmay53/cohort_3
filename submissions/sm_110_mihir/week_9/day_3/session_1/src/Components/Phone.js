import React from "react";
import Products from "./Products";
import { Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductRoute from "./ProductRoute";
import productArr from "./phonedata.json";

export default function Phone() {
    return (
        <React.Fragment>
            <Route
                path="/iPhone/xrCase"
                render={() => <Details name="xrcases" />}
            />
            <Route
                path="/iPhone/XsCase"
                render={() => <Details name="xsstrap" />}
            />
            <Route
                path="/iPhone/guard"
                render={() => <Details name="guard" />}
            />
            <Route
                exact
                path="/iPhone"
                render={props => (
                    <ProductList {...props} productArr={productArr} />
                )}
            />
            <Route
                path="/iPhone/:id"
                render={props => (
                    <ProductRoute {...props} productArr={productArr} />
                )}
            />
        </React.Fragment>
    );
}

const Details = props => {
    if (props.name === "xrcases") {
        return (
            <Products
                img="https://cdn.shopify.com/s/files/1/0173/8828/products/film__0000s_000216420013_2048x.jpg?v=1552541188"
                name="Leather iPhone XR cases"
                price="69.95"
                description="Fitting snuggly around the curvatures of your iPhone, our new leather cases are designed to add protection without bulk — Made from specially sourced, high quality, genuine Nappa leather, this case feels soft to the touch, and develops a natural patina over time. Side buttons are detailed out of machined aluminium, matching the finish of your leather case, while a microfibre lining inside helps protect your iPhone from scratches. With full support for wireless charging, Proper leather cases are built to stand the test of time."
            />
        );
    } else if (props.name === "xsstrap") {
        return (
            <Products
                img="https://cdn.shopify.com/s/files/1/0173/8828/products/iphoneXrleathercase_2048x.jpg?v=1552541188"
                name="Leather iPhone XS case"
                price="50.00"
                description="Fitting snuggly around the curvatures of your iPhone, our new leather cases are designed to add protection without bulk — Made from specially sourced, high quality, genuine Nappa leather, this case feels soft to the touch, and develops a natural patina over time. Side buttons are detailed out of machined aluminium, matching the finish of your leather case, while a microfibre lining inside helps protect your iPhone from scratches. With full support for wireless charging, Proper leather cases are built to stand the test of time."
            />
        );
    } else if (props.name === "guard") {
        return (
            <Products
                img="https://cdn.shopify.com/s/files/1/0173/8828/products/X.03_2048x.jpg?v=1547008399"
                name="iPhone Glass Guard"
                price="20"
                description="A screen saviour that you'll never notice, Proper's Glass Guards are made from high scratch resistance 9H hardness glass, with a seamless round beveled edge that blends invisibly into your iPhone.
                                With frustration free no-bubble installation and an oleophobic coating, it's the tempered glass your iPhone deserves."
            />
        );
    }
};
