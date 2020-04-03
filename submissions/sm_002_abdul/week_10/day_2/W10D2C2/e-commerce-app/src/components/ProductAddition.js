import React from "react"
import {connect} from "react-redux"
import {addProducts} from "../redux/action"

class ProductAddition extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : '',
      cost : '',
      description : '',
      category : ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const {name,cost,description,category} = this.state
    const {addProducts} = this.props
    addProducts(name,cost,description,category)
  }

  render(){
    const {categories} = this.props

    return (
      <form className="card shadow col-6 offset-3 my-5 p-4" onSubmit={this.handleSubmit}>

        <div className="row">

          <div className="col">
            <label>Product Name</label>
            <input
              name="name" 
              type="text" 
              className="form-control" 
              placeholder="Product Name"
              value = {this.state.name}
              onChange={this.handleChange}/>
          </div>

          <div className="col">
            <label>Cost</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Cost"
              name="cost"
              value={this.state.cost}
              onChange={this.handleChange}/>
          </div>

        </div>

        <div className="form-group">
          <div className="row">
            <div className="col">
              <label>Description :</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}/>
            </div>
          </div>
        </div>

        <select className="form-group form-control" name="category" value={this.state.category} onChange={this.handleChange}>
          <option value="">Select Category</option>
            {categories.map((el,idx)=>(<option key={idx}>{el}</option>))}
        </select>

        <button className="row col-4 offset-4 btn btn-outline-secondary">Add Product</button>

      </form>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    categories : state.categories,
    products : state.products
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addProducts : (name,cost,description,category) => dispatch(addProducts(name,cost,description,category))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductAddition)