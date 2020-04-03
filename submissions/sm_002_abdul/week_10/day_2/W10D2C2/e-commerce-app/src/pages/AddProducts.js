import React from "react"
import CategoryAddition from "../components/CategoryAddition"
import ProductAddition from "../components/ProductAddition"
import EditableProducts from "../components/EditableProducts"


class AddProducts extends React.Component{
  render(props){
    return (
      <>
        <CategoryAddition/>
        <ProductAddition/>
        <EditableProducts props={this.props}/>
      </>
    )
  }
}

export default AddProducts