import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {deleteProduct} from "../redux/action"

class EditableProducts extends React.Component{

  render(){
    const {products,deleteProduct} = this.props
    const {props} = this.props

    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {products.map(el=>(
              <div className="col-4 my-3" key={el.id}>
                <div className="card" style={{width:"21rem"}}>
                  <img src={el.imgUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <div className="row">
                      <h5 className="mr-auto">
                        {el.name} -
                      </h5>
                      <h5 className="ml-auto">
                        ₹ {el.cost}
                      </h5>
                    </div>

                    <div className="row">
                      <p className="card-text"><strong>Description</strong> : {el.description}</p>
                    </div>

                    <div className="row">
                      <h6 className="card-text"><strong>Category</strong> : {el.category}</h6>
                    </div>
                  </div>

                  <div className="card-footer">
                    <button
                      id={el.id}
                      onClick={(e)=>deleteProduct(e.target.id)} 
                      className="btn btn-outline-primary float-left px-5 mx-1 py-2">
                      Delete
                    </button>
                    <Link to={`${props.match.url}/${el.id}`}className="btn btn-outline-secondary float-right mx-1 px-5 py-2">
                      Edit
                    </Link>
                    </div>
                  </div>
                </div> 
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{
  return {
    products : state.products
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deleteProduct : id =>dispatch(deleteProduct(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditableProducts)