import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Shop.css'

class Shop extends React.Component{
  constructor(props){
    super(props)
    this.state={
      allProducts:[]
    }
  }

  componentDidMount(){
    axios.get('/products.json')
    .then(resp=>{
      let productsData=resp.data.productsList
      this.setState({
        allProducts:productsData
      })
    })
    .catch(error=>console.log('no products found'))  
  }

  render(){
    console.log(this.state.allProducts)
    console.log(this.props)
    return (
      <>
        <div class="row row-cols-1 row-cols-md-3 products-cont">
          {this.state.allProducts.map(el=>{
            return (
              <div class="col mb-4">
                <div class="card h-100">
                  <img src={el.imageUrl} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Product : {el.name}</h5>
                    <p class="card-text">Price : {el.price}</p>
                    <Link to={`${this.props.match.url}/${el.added}`}>More Details</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default Shop