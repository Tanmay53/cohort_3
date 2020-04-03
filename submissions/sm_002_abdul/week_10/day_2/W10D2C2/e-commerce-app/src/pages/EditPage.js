import React from "react"
import {connect} from "react-redux"
import {editProduct} from "../redux/action"
import {Link} from "react-router-dom"

class EditPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : '',
      cost : '',
      description : '',
      category : ''
    }
  }

  componentDidMount(){
    const {id} = this.props.match.params
    const {products} = this.props

    let productToBeEdited = products.find(el=>el.id===id)

    this.setState({
      id :productToBeEdited.id,
      name : productToBeEdited.name,
      cost : productToBeEdited.cost,
      description : productToBeEdited.description,
      category : productToBeEdited.category
    })
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const {editProduct} = this.props
    const {id,name,cost,description,category} = this.state
    editProduct(id,name,cost,description,category)
  }



  render(props){
    const {categories} = this.props

    return (
      <>
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

        <button className="row col-4 offset-4 btn btn-outline-secondary">Update Product</button>        

      </form>

      <Link to="/addProducts" className="row col-2 offset-5 btn btn-outline-secondary">Go Back To Previous Page</Link>
    </>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{
  return {
    products : state.products,
    categories : state.categories
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    editProduct : (id,name,cost,description,category) => dispatch(editProduct(id,name,cost,description,category))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPage)