import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"


export default class Categories extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="text-center">Clothing Categories</h1>
                    <ul className="h3">
                        <Link to="/categories/men"><li>Men</li></Link>
                        <Link to="/categories/women"><li>Women</li></Link>
                        <Link to="/categories/unisex"><li>Unisex</li></Link>
                    </ul>
                </div>
                <Route path="/categories/men" render={() => <Catogry name="men" />} />
                <Route path="/categories/women" render={() => <Catogry name="women" />} />
                <Route path="/categories/unisex" render={() => <Catogry name="unisex" />} />
            </React.Fragment>
        )
    }
}

const Catogry = (props) => {
    if (props.name === "men") {
        return (
            <React.Fragment>
                <div className="container p-5">
                    <h2>Men Clothing</h2>
                    <ol>
                        <li>Shirt</li>
                        <li>T-Shirt</li>
                        <li>Jeans</li>
                        <li>T-Shirt</li>
                    </ol>
                </div>
            </React.Fragment>
        )
    }
    else if (props.name === "women") {
        return (
            <React.Fragment>
                <div className="container p-5">
                    <h2>Women Clothing</h2>
                    <ol>
                        <li>Top</li>
                        <li>Jeans</li>
                    </ol>
                </div>
            </React.Fragment>
        )
    }
    else if (props.name === "unisex") {
        return (
            <React.Fragment>
                <div className="container p-5">
                    <h2>Unisex Clothing</h2>
                    <ol>
                        <li>Shirt</li>
                        <li>T-shirt</li>
                        <li>Jeans</li>
                        <li>T-shirt</li>
                    </ol>
                </div>
            </React.Fragment>
        )
    }
}