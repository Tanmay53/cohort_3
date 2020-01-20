import React from "react";

class CartForm extends React.Component {
    constructor(props) {
        super(props);


        this.name = "";
        this.id = "";
        this.desc = "";
        this.category = "";
        this.price = "";
    }

    handleItemName = (event) => {
        this.name = event.target.value;
    }
    handleItemId = (event) => {
        this.id = event.target.value;
    }
    handleItemDesc = (event) => {
        this.desc = event.target.value;
    }
    handleItemCategory = (event) => {
        this.category = event.target.value;
    }
    handlePrice = (event) => {
        this.price = event.target.value;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.function(this.name, this.id, this.desc, this.category, this.price);
    }

    render() {
        return (
            <div>
                <div className="container my-5 border border-dark">
                    <h1 className="text-center"><i className="fas fa-shopping-cart mr-3"></i>Your Cart</h1>
                    <form className="m-3">
                        <div class="form-group">
                            <label for="itemName">Item Name</label>
                            <input type="text" class="form-control" id="itemName"
                                onChange={this.handleItemName}
                            />

                        </div>
                        <div class="form-group">
                            <label for="itemId">Item Id</label>
                            <input type="text" class="form-control" id="itemId"
                                onChange={this.handleItemId}
                            />
                        </div>
                        <div class="form-group">
                            <label for="itemDesc">Item Desc</label>
                            <input type="text" class="form-control" id="itemDesc"
                                onChange={this.handleItemDesc}
                            />
                        </div>
                        <div class="form-group">
                            <label for="itemCategory">Item Category</label>

                            <select class="form-control" id="itemCategory" onChange={this.handleItemCategory}>
                                <option value="">Select Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Groceries">Groceries</option>
                                <option value="Automobile">Automobile</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" class="form-control" id="price" onChange={this.handlePrice} />
                        </div>

                        <div className="text-center">
                            <button type="submit" class="btn btn-primary btn-lg" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}


export default CartForm;