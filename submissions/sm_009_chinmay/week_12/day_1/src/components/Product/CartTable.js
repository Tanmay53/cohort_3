import React, { Component } from 'react'

class CartTable extends Component {
    filterByCategory = (event) => {
        this.props.filterByCategory(event.target.value)
    }
    render() {
        return (
            <React.Fragment>
                <h3 className='text-center'>Cart Table</h3>
                <table className="table table-striped table-dark">
                <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Category
                        <select className="btn btn-secondary" name="category" onChange={this.filterByCategory}>
                            <option value="all">All</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Books">Books</option>
                            <option value="Bikes">Bikes</option>
                        </select>
                    </th>
                    <th>Price</th>
                    <th>Add to Cart</th>
                </tr>
                    {(this.props.data.map( (e)=>
                        <tr key={e.itemID+e.itemName} id={e.itemID+e.itemName}>
                            <td>{e.itemID}</td>
                            <td>{e.itemName}</td>
                            <td>{e.itemDescription}</td>
                            <td>{e.category}</td>
                            <td>{e.price}</td>
                            <td><button onClick={()=>this.props.addToCart(e)} id={e.itemID} className='btn btn-success'>Add to Cart</button></td>
                        </tr>
                    ))}
                </table>
            </React.Fragment>
        )
    }
}
export default CartTable