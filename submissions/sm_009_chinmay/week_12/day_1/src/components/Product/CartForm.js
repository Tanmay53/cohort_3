import React, { Component } from 'react'
import CartTable from './CartTable'
import CartDisplay from './CartDisplay'
// import CartStyle from './styles/CartStyle'

let itemArr= []
class CartForm extends Component {
    constructor(){
        super()
        this.state = {
            itemName: '',
            itemID: '',
            itemDescription: '',
            category: '',
            price: 100,
            itemTable: itemArr,
            showTable: false,
            cartAddition: [],
            showCart: false,
            total: 0
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        var itemObj ={
            itemName: this.state.itemName,
            itemID: this.state.itemID,
            itemDescription: this.state.itemDescription,
            category: this.state.category,
            price: this.state.price
        }

        this.setState({
            itemTable: [...this.state.itemTable, itemObj],
            showTable: true
        })
        itemArr.push(itemObj)
        console.log(itemArr)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    filterByCategory = (input) => {
        console.log(input)
        if(input==='all'){
            this.setState({
                itemTable: itemArr
            })
        }
        else{
            var filterByCategoryArr = itemArr.filter( (e)=> e.category===input)
            console.log('filter by category', filterByCategoryArr)
            this.setState({
                itemTable: filterByCategoryArr
            })
        }
    }

    addToCart = (input) => {
        console.log('add to cart', input.itemID)
        let tempCart = input

        this.setState({
            cartAddition: [...this.state.cartAddition, tempCart],
            total: this.state.total + parseInt(tempCart.price),
            showCart: true
        })
        console.log(this.state.total)
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                <div className="row">
                    <div className='col-12 col-md-8 col-lg-8' style={{display: 'grid'}}>
                        <h1 className='text-center'>Add New Items</h1>
                        <form onSubmit={this.handleSubmit} className='m-2'>
                            <div className='form-row'>
                                <div className="form-group col-6 col-md-4 col-lg-4">
                                    <label>Item Name</label>
                                    <input 
                                    name='itemName' 
                                    type="text"
                                    value={this.state.itemName}
                                    onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group col-6 col-md-4 col-lg-4">
                                    <label>Item ID</label>
                                    <input name='itemID' type="text"
                                    value={this.state.itemID}
                                    onChange={this.handleChange}required/>
                                </div>
                                <div className="form-group col-6 col-md-4 col-lg-4">
                                    <label>Item Description</label>
                                    <textarea name="itemDescription"
                                    value={this.state.itemDescription}
                                    onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-6 col-md-4 col-lg-4">
                                    <label>Category</label> <br/>
                                    <select name="category"
                                    value={this.state.category}
                                    onChange={this.handleChange}required>
                                        <option value="">--Select Category--</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Kitchen">Kitchen</option>
                                        <option value="Books">Books</option>
                                        <option value="Bikes">Bikes</option>
                                    </select>
                                </div>
                                <div className="form-group col-6 col-md-4 col-lg-4">
                                    <label>Price</label> <br/>
                                    <input type="number"
                                    name='price'
                                    value={this.state.price}
                                    onChange={this.handleChange}required/>
                                </div>
                            </div>

                            <button type='submit' className="btn btn-primary col-12">Submit</button>
                        </form>
                    </div>

                {this.state.showCart && 
                <div className="col-12 col-md-4 col-lg-4 p-4 mt-10 text-center" style={{border: '1px solid grey', borderRadius: '10px'}}>
                    <div className="row text-center">
                        <CartDisplay data={this.state.cartAddition} total={this.state.total}/>
                    </div>
                </div>}


                </div>

                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">
                        {this.state.showTable && 
                        <CartTable data={this.state.itemTable} filterByCategory={this.filterByCategory}
                        addToCart={this.addToCart}/>}
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default CartForm