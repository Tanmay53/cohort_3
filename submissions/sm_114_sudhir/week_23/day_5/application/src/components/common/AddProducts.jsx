import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory,getCategories } from '../../redux/category/action'
import { addProduct } from '../../redux/product/action'

class AddProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
       product: '',
       price: 0,
       category: "",
       category_id: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount = async () => {
    let url = 'http://127.0.0.1:5000/get/categories'
    await this.props.getCategories(url)
  }

  addCategory = async () => {
    let category = {
      category: this.state.category
    }
    let url = 'http://127.0.0.1:5000/add/categories'
    await this.props.addCategory(url, category)

    this.props.getCategories('http://127.0.0.1:5000/get/categories')
  }

  addProduct = () => {
    let product = {
        product: this.state.product,
        price: this.state.price,
        category_id: this.state.category_id
    }
    let url = 'http://127.0.0.1:5000/add/product'
    this.props.addProduct(url, product)

  }

  render() {
      console.log(this.props.state)
    if (this.props.state.categories) {
      return (
        <div className="container">
           <h2 className="text-center" >Add Categories and Products</h2>
              <div className="row mb-5">
                  <div className="col">
                    <h4>Add Category</h4>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div class="form-group">
                            <label for="city">Category Name</label>
                            <input 
                                onChange = {this.handleChange} 
                                name="category" type="text" 
                                class="form-control" id="category" 
                                placeholder="Enter the category name"
                                aria-describedby="emailHelp"/>
                        </div>
                        <button 
                            onClick={this.addCategory} 
                            type="submit" class="btn btn-primary">
                            Add Category
                        </button>
                    </form>
                  </div>
                  <div className="col">
                    <h4>Add Products</h4>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div class="form-group">
                            <label for="product">Product Name</label>
                            <input 
                                onChange = {this.handleChange} 
                                name="product" type="text" 
                                class="form-control" 
                                placeholder="Enter the Product Name"
                                aria-describedby="emailHelp"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="#source">Categories</label>
                            <select 
                                id="category" 
                                name="category_id" 
                                className="form-control" 
                                onChange={this.handleChange}
                            >
                                {this.props.state.categories.map(category => {
                                    return (
                                    <option value={category.id}>{category.category}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="price">Price</label>
                            <input 
                                onChange = {this.handleChange} 
                                name="price" type="number" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="Enter the price"
                                aria-describedby="emailHelp"/>
                        </div>
                        <button 
                          onClick={this.addProduct} 
                          type="submit" class="btn btn-primary">Add Product</button>
                    </form>
                  </div>
              </div>
        </div>
      ) 
    } else {
      return <h1>Data loading</h1>
    }
    
  }
}



const mapStateToProps = (state) => ({
    state: state.categoryReducer
})

const mapDispatchToProps = dispatch => ({
    addCategory: (url, payload) => dispatch(addCategory(url, payload)),
    addProduct: (url, payload) => dispatch(addProduct(url, payload)),
    getCategories: (url) => dispatch(getCategories(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddProducts)