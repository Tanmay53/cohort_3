import React from "react"
import {connect} from "react-redux"
import { orderDetails } from "../redux/action"

class OrderConfirmaton extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      customerName : "",
      contact : "",
      paymentDetails : ""
    }
  }

  componentDidMount(){
    const {cart} = this.props
    var totalPrice = cart.reduce((a,c)=>(a+(c.quantity*c.cost)),0)
    this.setState({
      totalPrice : totalPrice
    })
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const {cart,orderDetails} = this.props
    const {customerName,contact,paymentDetails,totalPrice} = this.state
    orderDetails([...cart],customerName,contact,paymentDetails,totalPrice)
    alert ("Your Order Has been Placed !")
  }

  render(){

    return (
      <div className="container card">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col form-group">
                <label>Customer Name : </label>
                <input 
                  value={this.state.customerName}
                  type="text" 
                  className="form-control" 
                  placeholder="Customer Name" 
                  name="customerName"
                  onChange={this.handleChange}/>
              </div>

              <div className="col form-group">
                <label>Contact : </label>
                <input
                  value={this.state.contact} 
                  type="text" 
                  className="form-control" 
                  placeholder="Contact" 
                  name="contact"
                  onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col-4 offset-4 form-group">
                <select 
                  className="form-control" 
                  name="paymentDetails" 
                  value={this.state.paymentOption}
                  onChange={this.handleChange}>
                  <option value="">Payment Option</option>
                  <option value="Card">Card</option>
                  <option value="Pay On Delivery">Pay On Delivery</option>
                  <option value="EMI">EMI</option>
                </select>
              </div>
            </div>
            <div className="row">
              <button className="col-2 offset-5 btn btn-outline-secondary form-group">Confirm Order</button>
            </div>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    cart : state.cart
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    orderDetails : (order,customerName,contact,paymentDetails,totalPrice) => dispatch(orderDetails(order,customerName,contact,paymentDetails,totalPrice))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(OrderConfirmaton)