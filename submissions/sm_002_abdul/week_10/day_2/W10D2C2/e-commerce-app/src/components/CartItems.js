import React from "react"
import {connect} from "react-redux"
import "./CartItems.css"
import {addQuantityCart,subtractQuantityCart} from "../redux/action"

class CartItems extends React.Component{

  render(props){
    
    const {cart,addQuantityCart,subtractQuantityCart} = this.props

    let totalPrice = cart.reduce((a,c)=>(a+(c.quantity*c.cost)),0) 

    return (
      <tbody>
        {cart.map(el=>(
          <tr key={el.id}>
            <td>
              <img src={el.imgUrl} alt="" width="120" height="120"/>
            </td>

            <td>
              <h5>{el.name}</h5>
            </td>

            <td>
              <h5>{el.cost}</h5>
            </td>

            <td>
              <div>
                <small
                  onClick = {()=>addQuantityCart(el.id)} 
                  className="h5 mx-2 add-remove">
                  <i class="ri-add-fill"></i>
                </small>

                <small className="h5 mx-2">
                  {el.quantity}
                </small>

                <small
                  onClick={()=>subtractQuantityCart(el.id)} 
                  className="h5 mx-2 add-remove">
                  <i class="ri-subtract-fill"></i>
                </small>

              </div>
            </td>
            
            <td>
              <h5>{el.cost*el.quantity}</h5>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3"></td>
          <td>
            <h3 className="text-dark">Total : </h3>
          </td>
          <td>
            {
              totalPrice 
              ?
              <h3>{totalPrice}</h3>
              :
              ""
            }
          </td>
        </tr>
      </tbody>
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
    addQuantityCart : id => dispatch(addQuantityCart(id)),
    subtractQuantityCart : id => dispatch(subtractQuantityCart(id))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(CartItems)