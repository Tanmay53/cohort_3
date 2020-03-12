import React from 'react'
import axios from 'axios'
import './ProductPage.css'

class ProductPage extends React.Component{
  constructor(){
    super()
    this.state={
      product:''
    }
  }


  componentDidMount(){
    
    axios.get('/products.json')
    .then(res=>{
      let selectedProduct=res.data.productsList.find(el=>{
        return Number(el.added)===Number(this.props.match.params.id)
      })
      this.setState({
        product:selectedProduct
      })
    })
  }

  render(props){
    console.log(this.state.product)
    return (
      <>
        {
          this.state.product
          ?
          (
            <div className="card mb-3 mrgn-top container product-container">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={this.state.product.imageUrl} className="card-img img-fluid" alt="..."/>
                  <div className="d-flex align-items-center justify-content-center my-3">
                    <button className="btn btn-info">Add to cart <i class="fas fa-shopping-cart"></i></button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><h6>{this.state.product.name}</h6></li>
                      <li class="list-group-item"><strong>Price</strong> : {this.state.product.price}</li>
                      <li class="list-group-item"><strong>Item Type</strong> : {this.state.product.itemType}</li>
                      <li class="list-group-item"><strong>Manufacturer</strong> : {this.state.product.manufacturer}</li>
                      <li class="list-group-item"><strong>Description</strong> :{this.state.product.description}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
          :
          (
            <div className="card mb-3 mrgn-top container product-container p-5 text-center">
              <h1>Product Not Found !</h1>
            </div>
          )
        }
        
      </>
    )
  }
}

export default ProductPage