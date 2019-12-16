import React from "react"
import ProductTable from "./ProductTable"
import ProductForm from "./ProductForm"

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isHided: false
        }
    }
    add = (productname, productid, sellername, categery, quantity, COD) => {
        console.log(productname, productid, sellername, categery, quantity)
        var status = ""
        if (COD == true) {
            status = "Yes"
        }
        else {
            status = "No"
        }
        var temp = {
            productname: productname,
            productid: productid,
            sellername: sellername,
            categery: categery,
            Cod: status,
            quantity: quantity
        }
        this.setState({
            data: [...this.state.data, temp]
        })

    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <ProductForm add={this.add} />
                <button onClick={this.filterCategery}>Filter By categery </button>
                <button>Filter By Cod Availability </button>

                <ProductTable data={this.state.data} />
            </div>
        )
    }
}

export default Product