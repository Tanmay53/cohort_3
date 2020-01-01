import React from 'react'
import Data from './ProductData'



class Product extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            itemName : "",
            itemId : "",
            itemDesc : "",
            category : "",
            material : "",
            price : "",
            items : []
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
            material : this.state.material,
            price : this.state.price,
        }
        this.setState({
            items : [...this.state.items, data]
        })
        
    }

    render(){
        return(
            <div>
                <div className = "bgProduct my-4">
                    <h2 className="mx-2 my-2">Product Form</h2>
                    <form className= "mx-4" onSubmit={this.submit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Item Name</label>
                            <input onChange={this.handleChange} name = "itemName" value ={this.state.itemName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Id</label>
                            <input onChange={this.handleChange} name = "itemId" value ={this.state.itemId} type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Item Description</label>
                            <input onChange={this.handleChange} name="itemDesc"  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <select className="form-group" onChange={this.handleChange} name = "category" value ={this.state.category}>
                            <option value = "bedroom">Bedroom</option>
                            <option value = "livingRoom">Living Room</option>
                            <option value = "dining">Dining</option>
                            <option value = "appliances">Appliances</option>
                        </select>
                        <select className="form-group mx-3" onChange={this.handleChange} name = "material" value ={this.state.material}>
                            <option value = "teak">teak</option>
                            <option value = "oak">OAK</option>
                            <option value = "walnut">WALNUT</option>
                            <option value = "mapple">MAPPLE</option>
                        </select>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Price</label>
                            <input onChange={this.handleChange} name = "price" value ={this.state.price} type="number" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button   type="submit" className="btn loginBtnColor">Submit</button>
                    </form>
                    <br />
                </div>
                <div>
                    <h2>Product Deatils</h2>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Item Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Material</th>
                            <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.items.map((ele)=> (
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

export default Product