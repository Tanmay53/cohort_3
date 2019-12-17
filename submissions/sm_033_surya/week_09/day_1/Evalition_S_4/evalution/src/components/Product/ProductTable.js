import React from "react"

class ProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        console.log(this.props.data)
        return (
            <div>
                <table className="table-dark">
                    <tr><td>Product Name</td><td>ProductID</td><td>Sellername</td><td>Categery</td><td>quantity</td><td>Cod Avialable</td></tr>
                    {this.props.data.map((ele) => <tr><td>{ele.productname}</td><td>{ele.productid}</td><td>{ele.sellername}</td><td>{ele.categery}</td><td>{ele.quantity}</td><td>{ele.Cod}</td></tr>)}
                </table>
            </div>
        )
    }
}

export default ProductTable