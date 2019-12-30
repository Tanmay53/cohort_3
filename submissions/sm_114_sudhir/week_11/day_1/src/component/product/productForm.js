import React from 'react';
import ProductTable from './productTable';

class ProductForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product : [],
            newProduct : {
                itemName : '',
                itemId : '',
                itemDesc : '',
                category : '',
                material : '',
                price : 0
            }
        }
    }

    handleChange = (e) => {
        let obj = {...this.state.newProduct,[e.target.name] : e.target.value}
        this.setState(() =>({
            newProduct : obj
        }));
        console.log(obj)
    }

    onSubmit = (e) => {
        e.preventDefault();
        let list = [...this.state.product, {...this.state.newProduct}]
        this.setState(()=>({
            product : list,
        }));
    }



    render () {
        // console.log(this.state.product)
        return (
            <div>
                <div className="container">
                    <div className="row p-4">
                        <div className="col-4 border border-primary rounded bg-light p-4">
                            <h3 className="font-weight-bold text-center pb-3">Item Details</h3>
                            <form>
                                <div className="form-group">
                                    <label><h6 className="font-weight-bold">Item Name</h6></label>
                                    <input onChange={this.handleChange} type="text" className="form-control" name="itemName" id="itemName" placeholder="Enter the product name..." />
                                </div>
                                <div className="form-group">
                                    <label><h6 className="font-weight-bold">Item Id</h6></label>
                                    <input onChange={this.handleChange} type="text" className="form-control" name="itemId" id="itemId" placeholder="Enter the product id..." />
                                </div>
                                <div className="form-group">
                                    <label><h6 className="font-weight-bold">Item Description</h6></label>
                                    <input onChange={this.handleChange} type="text" className="form-control" name="itemDesc" id="itemDesc" placeholder="Enter the seller name..." />
                                </div>
                                <div className="form-group">
                                    <label><h6 className="font-weight-bold">Category</h6></label>
                                    <select name="category" value={this.state.category} onChange={this.handleChange} className="form-control">
                                        <option value="bedroom">Bed Room</option>
                                        <option value="living">Living Room</option>
                                        <option value="dining">Dinnig Appliances</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><h6 className="font-weight-bold">price</h6></label>
                                    <input onChange={this.handleChange} type="text" className="form-control" name="price" id="price" placeholder="Enter price..." />
                                </div>
                                <div className="form-group">
                                <h6 className="font-weight-bold">Material</h6>
                                   <input onChange={this.handleChange} type="text" name="material" placeholder="Enter material..." className="form-control"/>
                                   <label className="form-check-label"></label>
                                </div>
                                <div className="form-group form-check">
                                    <button onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                   
                            </form>
                        </div>
                        <div className="col-8 border border-primary rounded bg-light p-4">
                            <h3 className="font-weight-bold text-center pb-3">Item Data Table</h3>
                            <ProductTable prod = {this.state.product}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductForm;