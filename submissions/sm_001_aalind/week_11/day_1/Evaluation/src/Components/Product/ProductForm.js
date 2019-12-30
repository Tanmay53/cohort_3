import React, {Component} from "react";
import "./productForm.css"

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            itemName: '',
            itemId: '',
            itemDescription: '',
            itemCategory: '',
            itemMaterial: '',
            itemPrice: ''
        }
        this.state = this.initialState
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState(() => {
            if(name === "itemCategory" && value === "appliances") {
                return {
                    [name]: value.toLowerCase(),
                    itemMaterial: ""
                }
            } else {
                return {
                    [name]: value.toLowerCase()
                }
            }
        })
    }

    handleForm = (event) => {
        this.props.createProduct(this.state)
        this.setState(this.initialState)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Product Form</h1>
                <form className="form" onSubmit={this.handleForm}>
                    <label>Name</label>
                    <input type="text" name="itemName" value={this.state.itemName} onChange={this.changeHandler} />
                    <label>Id</label>
                    <input type="text" name="itemId" value={this.state.itemId} onChange={this.changeHandler} />
                    <label>Description</label>
                    <input type="text" name="itemDescription" value={this.state.itemDescription} onChange={this.changeHandler} />
                    <label>Category</label>
                    <select 
                        onChange={this.changeHandler} 
                        value={this.state.itemCategory} 
                        name="itemCategory"
                    >
                        <option value=""></option>
                        <option value="bedroom">Bedroom</option>
                        <option value="living_room">Living Room</option>
                        <option value="dining">Dining</option>
                        <option value="appliances">Appliances</option>
                    </select>
                    <label>Material</label>
                    <select 
                        onChange={this.changeHandler} 
                        name="itemMaterial" 
                        value={this.state.itemMaterial} 
                        disabled={this.state.itemCategory === "appliances"}
                    >
                        <option value=""></option>
                        <option value="teak">Teak</option>
                        <option value="oak">Oak</option>
                        <option value="walnut">Walnut</option>
                        <option value="maple">Maple</option>
                    </select>
                    <label>Price</label>
                    <input type="number" name="itemPrice" value={this.state.itemPrice} onChange={this.changeHandler} />
                    <input type="submit" value="Create Product" />
                </form>
            </div>
        );
    }
}

export default ProductForm