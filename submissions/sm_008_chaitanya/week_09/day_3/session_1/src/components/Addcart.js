import React from 'react'
class Addcart extends React.Component{
    render(){
        if(this.props.cart.length>=1){
            return(
                <div className="container">
                    <table className="table table-responsive col-lg-9 offset-lg-2 table-dark mt-2">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Subcategory</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {this.props.cart.map(element=>
                            <tbody key={element.id}>
                                <tr>
                                    <th>{element.name}</th>
                                    <th>{element.category}</th>
                                    <th>{element.subcategory}</th>
                                    <th>{element.price}</th>
                                    <th><button className="btn btn-sm border border-danger mr-2 text-light" onClick={()=>this.props.dec(element.id,element.price)}>-</button>
                                    {element.count}
                                    <button className="btn btn-sm border border-success ml-2 text-light" onClick={()=>this.props.inc(element.id,element.price)}>+</button></th>
                                    <th>{element.total}</th>
                                    <th><button className="btn btn-danger text-light" onClick={()=>this.props.del(element.id)}>Delete</button></th>
                                </tr>
                            </tbody>
                            )}
                    </table>
                </div>
            )
        }
        else{
            return null
        }
    }
}
export default Addcart