import React from "react"

class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productname: "",
            productid: "",
            sellername: "",
            categery: "",
            quantity: "",
            COD: false

        }
    }
    checked = () => {
        this.setState({
            COD: !this.state.COD
        })
    }
    render() {
        console.log(this.state.categery)
        return (
            <div className="container">
                <div className="col-lg-6 col-md-12 col-sm-12 border border-secondary offset-2 m-5 p-5 rounded">
                    <div className="col-12 m-2">
                        <label>ProductName:</label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="p-2 col-12" placeholder="Enter ProductName" value={this.state.productname} onChange={(e) => this.setState({ productname: e.target.value })} />
                    </div>
                    <div className="col-12 m-2">
                        <label>Product id:</label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="p-2 col-12" placeholder="Enter Product id" type="text" value={this.state.productid} onChange={(e) => this.setState({ productid: e.target.value })} />
                    </div>
                    <div className="col-12 m-2">
                        <label>Seller Name:</label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="p-2 col-12" placeholder="Enter Seller Name" type="text" value={this.state.sellername} onChange={(e) => this.setState({ sellername: e.target.value })} />
                    </div>
                    <div className="col-12 m-2">
                        <label>Categery:</label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="p-2 col-12" placeholder="Enter Categery" type="text" value={this.state.categery} onChange={(e) => this.setState({ categery: e.target.value })} />
                    </div>
                    <div className="col-12 m-2">
                        <label>COD Available id:</label>
                    </div>
                    <div className="col-12">
                        <input className="col-12" placeholder="Enter Password" type="checkBox" defaultChecked={this.state.COD} onChange={this.checked} />
                    </div>
                    <div className="col-12 m-2">
                        <label>Quantity:</label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="p-2 col-12" placeholder="Enter Quantity" type="text" value={this.state.quantity} onChange={(e) => this.setState({ quantity: e.target.value })} />
                    </div>

                    <div className="col-12 m-2">
                        <button className="col-3 offset-5 btn btn-success" onClick={() => this.props.add(this.state.productname, this.state.productid, this.state.sellername, this.state.categery, this.state.quantity, this.state.COD)}>Submit</button>
                    </div>
                </div>




            </div>
        )
    }
}

export default ProductForm