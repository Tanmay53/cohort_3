import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AllProducts extends Component {
    render() {
        let props =this.props
        let productArr=this.props.productArr
        return (
            
                <React.Fragment>
                    <h2> Products </h2>
                    <div className="row m-2" style = {{border : "1px solid black"}}>
                        {productArr.map(element =>{
                            return (
                                <div className="col-4 p-2" key = {element.id}>
                                    <div className="m-2 p-4 card">
                                    <p> {element.name} </p>
                                    <Link to = {`${props.match.url}/${element.id}`}> Click to see the product </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </React.Fragment>
        );
    }
}
