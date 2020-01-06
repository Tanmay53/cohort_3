import React from 'react';
import Product from './Product';
import uuid1 from 'uuid/v4';
var allData=[]
class Cart extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"",
      id:"",
      desc:"",
      category:"",
      price:"",
      toShow:false
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  priceSum=0
  handleAddtoCart=()=>{
    this.priceSum+=Number(this.state.price)
    allData.push(this.state)
    this.setState({
      toShow:true
    })
    console.log(allData)
  }
  
  render(){
    return(
      <div>
        <Product inputX={this.handleChange} />
        <div className="col-4 row mx-auto mt-3">
        <button type="button" onClick={this.handleAddtoCart} className="btn btn-primary col">Add to Cart</button>
        </div>
        <div className="container mt-5">
          <p className="text-center">Cart details will be shown below</p>
          <table className="table table-hover">
            {(this.state.toShow) ? <thead className="thead-dark"><tr><th>Name</th><th>Id</th><th>Description</th><th>Category</th><th>Price</th></tr></thead> : <thead></thead>}
            <tbody>
            {(this.state.toShow) ? allData.map((e)=>{return <tr key={uuid1()}><td>{e.name}</td><td>{e.id}</td><td>{e.desc}</td><td>{e.category}</td><td>{e.price}</td></tr>}) : <tr></tr> }
           </tbody>         
          </table>
        </div>
        {(this.state.toShow) ? <div><p className="text-center h2 text-danger">Total Price  ₹ {this.priceSum}</p></div> : <div></div>}
      </div>
    )
  }
}
export default Cart;
