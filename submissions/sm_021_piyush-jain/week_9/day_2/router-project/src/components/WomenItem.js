import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
class WomenItem extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <React.Fragment>
                <h2 class="text-center m-5">SHOP SHOP SHOP</h2>
            </React.Fragment>
            )
    }
}
export default WomenItem