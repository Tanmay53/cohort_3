import React, { Component } from 'react'

export default class AddToCart extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="container">
                    <div className='row m-5 text-center'>
                        <div className="col">
                            <h1>You've added item in your cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
