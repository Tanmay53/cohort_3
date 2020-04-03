import React from "react"
import {connect} from "react-redux"

class Orders extends React.Component{
  render(){
    const {allOrders} = this.props
    return (
      <div className="container-fluid text-center">
        <h1 className="text-secondary my-3">Final Orders</h1>
        {allOrders.map(orderDetails=>(
          <div className="container card my-5" key={orderDetails.orderId}>
            <h5 className="text-dark">Order Id : {orderDetails.orderId}</h5>
            <h5 className="text-dark">Customer Name : {orderDetails.customerName}</h5>
            <h5 className="text-dark">Contact : {orderDetails.contact}</h5>
            <h5 className="text-dark">Payment Details : {orderDetails.paymentDetails}</h5>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Cost</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.order.map(item=>(
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.cost}</td>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="text-secondary">Your Total Bill is ₹ {orderDetails.totalPrice}</h3>
          </div> 
        ))}
      </div>  
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    allOrders : state.allOrders
  }
}


export default connect(mapStateToProps,null)(Orders)