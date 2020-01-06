import React, { Component } from 'react'

export default class CartTable extends Component {
    render() {
        return (
            <table className="table table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">itemName</th>
      <th scope="col">id</th>
      <th scope="col">category</th>
      <th scope="col">price</th>
      <th scope="col">Buy</th>
    </tr>
  </thead>
  <tbody>
         {this.props.newArr.map(ele => {
             return(
                 <tr key={ele.itemId} >
                     <td>{ele.itemName} </td>
                     <td>{ele.itemId}</td>
                     <td>{ele.category}</td>
                     <td>{ele.price}</td>
                     <td><button className="btn btn-success">+cart</button></td>
                 </tr>
             )
         })}   
  </tbody>
</table>
        )
    }
}
