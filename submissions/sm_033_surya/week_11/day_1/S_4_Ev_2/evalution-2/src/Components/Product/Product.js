import React from "react"
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

class Product extends React.Component {
    constructor(props) {
        super( props)
        this.state = {
            data: [],
            category: "",
            displaydata: [],
            cartArra: [],
            sum: 0
        }

    }
    // -------------Input Form Data---------------//
    formData = (formdata) => {
        this.setState({
            data: [...this.state.data, formdata],
            displaydata: [...this.state.displaydata, formdata]
        })
    }

    //-------------------------filter by Category------------------------//
    selection = () => {
        if (this.state.category != "All") {
            this.setState({
                displaydata: this.state.data.filter((ele) => ele.category === this.state.category)
            })
        }
        else {
            this.setState({
                displaydata: this.state.data
            })
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //----------------------Cart function------------------------//
    cart = (id) => {
        var temp = this.state.cartArra
        this.state.data.filter((ele) => {
            if (ele.id === id) {
                temp.push(ele)
                this.setState({
                    sum: this.state.sum + (ele.price)
                })
            }
        })
        this.setState({
            cartArra: temp
        })
        // var sum = this.state.cartArra.reduce((a, b) => Number(a.price) + Number(b.price))
        // console.log(sum)
        // console.log(temp)

    }
    render() {
        console.log(this.state.sum)
        return (
            <div className="container"><h1>Product</h1>
            <div className="row">

                    {/*  Form component */}



                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <ProductForm formData={this.formData} />
                    </div>

                    {/* Cart details Div */}

                    <div className="col-lg-6 col-md-8 col-sm-12"> Your Cart: 
                        <table className="table border">
                            <thead className="thead">
                                <tr><th>ItemName</th><th>ItemID</th><th>Price</th></tr>
                            </thead>
                            {this.state.cartArra.map((ele) => <tr><td>{ele.itemname}</td><td>{ele.itemId}</td><td>{ele.price}</td></tr>)}
                        </table>
                        <div className="col-10 text-right">Toatal Price: {this.state.sum}</div>
                    </div>
                </div>

            {/* Filter By Category */}
                
                <div className="col-12 m-3">
                <label>Fileter by category</label>
                    <select name="category" value={this.state.name} onChange={this.handleChange} onClick={this.selection}>
                        <option value="All"></option>
                        <option value="BedRoom">BedRoom</option>
                        <option value="LivingRoom">LivingRoom</option>
                        <option value="Dining">Dining</option>
                        <option value="Appliances">Appliances</option>
                    </select>

                </div>

            {/* Table Form */}

                <ProductTable Userdata={this.state.displaydata} cart={this.cart} />
            </div>
        )
    }
}
export default Product