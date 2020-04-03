import React from "react"
import {connect} from "react-redux"
import CartItems from '../components/CartItems'
import OrderConfirmation from "../components/OrderConfirmation"

class Cart extends React.Component{

  render(props){

    const {cart} = this.props

    return (
      <div className="container-fluid">
        <h1 className="text-center text-secondary">Check Out</h1>
        <table className="table table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <CartItems/>
        </table>

        {
          cart.length>0
          ?
          <OrderConfirmation/>
          :
          <h1 className="text-center text-secondary">You Have No Items In Your Cart</h1>      
        }
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    cart : state.cart
  }
}

export default connect(mapStateToProps,null)(Cart)