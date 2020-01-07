import React from "react";
import { Redirect } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to="/signIn" />;
    } else {
      return (
        <div>
          <h2>Items in cart : {this.props.cartData.length}</h2>
          <div className="col-md-8 offset-2">
            <h2>Cart</h2>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cartData.map(ele => {
                  return (
                    <tr>
                      <td>{ele.id}</td>
                      <td>{ele.productName}</td>
                      <td>{ele.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
