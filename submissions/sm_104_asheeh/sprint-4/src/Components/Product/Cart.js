import React, { Component } from 'react'
import CartForm from './CartForm'

export default class Cart extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CartForm />
            </div>
        )
    }
}
