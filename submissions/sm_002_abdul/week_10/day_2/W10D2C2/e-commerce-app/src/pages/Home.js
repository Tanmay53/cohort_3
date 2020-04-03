import React from "react"
import {connect} from "react-redux"
import {addToCart,removeFromCart} from "../redux/action"

class Home extends React.Component{
  render(){
    const {products,cart,addToCart,removeFromCart} = this.props

    return (
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-3 products-cont">
          {products.map(el=>{
            return (
              <div className="col mb-4" key={el.id}>
                <div className="card h-100">
                  <img src={el.imgUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">

                    <div className="row my-2">
                      <h5 className="mr-auto">
                        {el.name}
                      </h5>
                      <h5 className="ml-auto">
                        ₹ {el.cost}
                      </h5>
                    </div>

                    <div className="row my-2">
                      <p className="card-text"><strong>Description</strong> : {el.description}</p>
                    </div>

                    <div className="row my-2">
                      <h6 className="card-text"><strong>Category</strong> : {el.category}</h6>
                    </div>

                  </div>

                  <div className="card-footer my-2">
                    {
                      (cart.find(prod=>prod.id===el.id))
                      ?
                      <button className="col-8 offset-2 btn btn-outline-secondary" onClick={()=>removeFromCart(el.id)}>
                        Remove From Cart
                      </button>
                      :
                      <button className="col-8 offset-2 btn btn-outline-secondary" onClick={()=>addToCart(el.id)}>
                        Add to cart
                      </button>
                    }
                  </div>
                  
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{
  return {
    products : state.products,
    cart : state.cart
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addToCart : id =>dispatch(addToCart(id)),
    removeFromCart : id =>dispatch(removeFromCart(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)