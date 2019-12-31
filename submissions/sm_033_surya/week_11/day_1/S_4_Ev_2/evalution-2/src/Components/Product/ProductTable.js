import React from "react"

class ProductTable extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }

    }
    render() {
        console.log(this.props.Userdata, "table")
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr><th>ItemName</th><th>ItemID</th><th>ItemDescription</th><th>Categery</th><th>Material</th><th>Price</th><th></th></tr>
                    </thead>
                    <tbody>
                        {this.props.Userdata.map((ele) => <tr><td>{ele.itemname}</td><td>{ele.itemId}</td><td>{ele.itemdsec}</td><td>{ele.category}</td><td>{ele.material}</td><td>{ele.price}</td><td><button className="btn btn-success" onClick={() => this.props.cart(ele.id)}>Add</button></td></tr>)}
                    </tbody>
                </table>

            </div>
        )
    }
}
export default ProductTable