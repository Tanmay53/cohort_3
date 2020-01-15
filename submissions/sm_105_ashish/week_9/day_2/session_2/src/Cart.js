import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'


export default class Cart extends Component {
    render()
     {
        if(this.props.isAuthenticated)
        return (
            <div className="row" >
                <div className="col-6 m-auto">
                    <h1 className="mx-auto my-4">Welcome User</h1>
                    <ol className='m-auto'>
        {this.props.cartList.map(ele=>ele.split(',')).map(val=><li>Item Name:{val[0]} Price is:{val[1]}</li>)}
                    </ol>
                </div>
            </div>
        )
        else{
        return(
                <Redirect to={{
                pathname: "/auth",
                 }}/>
        )
        }
    }
}
