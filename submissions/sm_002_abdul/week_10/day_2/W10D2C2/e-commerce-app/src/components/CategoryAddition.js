import React from "react"
import {connect} from "react-redux"
import {addCategory} from "../redux/action"

class CategoryAddition extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      input : ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      input : e.target.value
    })
  }

  render(){
    return (
      <div className="row my-3">
        <div className="col-4 offset-4 input-group">

          <input
            className="form-control" 
            placeholder="name of category"
            type="text"
            value={this.state.input}
            onChange={this.handleChange}/>

          <button
          onClick={()=>this.props.addCategory(this.state.input)} 
          className="btn btn-outline-secondary">Add Category</button>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addCategory : item => dispatch(addCategory(item))
  }
}


export default connect(null,mapDispatchToProps)(CategoryAddition)