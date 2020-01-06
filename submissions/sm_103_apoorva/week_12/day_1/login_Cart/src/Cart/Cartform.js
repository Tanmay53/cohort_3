import React from 'react'
import Data from './CartTable'
class Cart extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            itemName : "",
            itemId : "",
            itemDesc : "",
            category : "",
            price : 0,
            total : 0,
            items : [],
            duplicate : []
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
        
    }

    submit=(event)=>
    {
        event.preventDefault();
        let data = {
            itemName : this.state.itemName,
            itemId : this.state.itemId,
            itemDesc : this.state.itemDesc,
            category : this.state.category,
            price : this.state.price,
        }
        this.setState({
            items : [...this.state.items, data],
            duplicate : [...this.state.items, data],
            total: parseFloat(this.state.total) + parseFloat(this.state.price)
        })
        this.setState({
            itemName : "",
            itemId : "",
            itemDesc : "",
            price : 0
        })
    }


    filterProduct=(e)=>
    {
        let list = [...this.state.items]
        let updatedList = list.filter((item) =>{
            if(item.category == e.target.value)
            {
                return item
            }
            else if("all" == e.target.value)
            {
                return item
            }
        })

        this.setState({
            duplicate : updatedList
        })
    }

    render(){
        return(
            <div>
                <div className = "bgCart my-4">
                    <h2 className="mx-2 my-2">Product Form</h2>
                    <form className= "mx-4" onSubmit={this.submit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Item Name</label>
                            <input onChange={this.handleChange} name = "itemName" value ={this.state.itemName} type="text" className="form-control border-danger" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Id</label>
                            <input onChange={this.handleChange} name = "itemId" value ={this.state.itemId} type="text" className="form-control border-danger" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Item Description</label>
                            <input onChange={this.handleChange} name="itemDesc"  type="text" className="form-control border-danger" value={this.state.itemDesc} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <label>Category</label>
                        <select className="form-group ml-3 rounded border-danger bg-white" onChange={this.handleChange} name = "category" value ={this.state.category}>
                            <option>Choose</option>
                            <option value = "SummerWear">Summer Wear</option>
                            <option value = "WinterWear">Winter Wear</option>
                            <option value = "SportsWear">Sports Wear</option>
                            <option value = "Accessories">Accessories</option>
                        </select>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Price</label>
                            <input onChange={this.handleChange} name = "price" value ={this.state.price} type="number" className="form-control border-danger" id="exampleInputPassword1" />
                        </div>
                        <button   type="submit" className="btn loginBtnColor">Add to Cart</button>
                    </form>
                    <br />
                </div>
                <div>
                    <div className="row bg-dark text-white">
                        <div className="col-4">
                            <h2>Product Deatils</h2>
                        </div>
                        <div className="col-4 mt-1">
                            <label>Filter by Category</label>
                            <select className="form-group ml-3 rounded border-info bg-white" onChange={this.filterProduct} name="category">
                                <option>Choose</option>
                                <option value = "all">All</option>
                                <option value = "SummerWear">Summer Wear</option>
                                <option value = "WinterWear">Winter Wear</option>
                                <option value = "SportsWear">Sports Wear</option>
                                <option value = "Accessories">Accessories</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <h5 className="mt-1">Total Value</h5>
                            <div className="cartBox my-1">
                                <h5 className="text-center mt-1">Rs. {this.state.total}</h5>
                            </div>
                        </div>
                    </div>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Item Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price in Rupees</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.duplicate.map((ele)=> (
                                <Data label={ele}/>
                            )
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Cart