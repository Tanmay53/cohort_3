import React from "react"

class ProductForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            itemname: "",
            itemId: "",
            itemdesc: "",
            category: "",
            material: "",
            price: "",
            id: 1,
            isappliances: false
        }

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // -------------Depends on category declaring material in  Inputdata -----------------//

    submitData = () => {
        if (this.state.category != "Appliances") {
            var temp = {
                itemname: this.state.itemname,
                itemId: this.state.itemId,
                itemdsec: this.state.itemdesc,
                category: this.state.category,
                material: "none",
                id: this.state.id,
                price: Number(this.state.price)
            }
            this.setState({
                id: this.state.id + 1
            })
            this.props.formData(temp)
        }

        else {
            var temp = {
                itemname: this.state.itemname,
                itemId: this.state.itemId,
                itemdsec: this.state.itemdesc,
                category: this.state.category,
                material: this.state.material,
                id: this.state.id,
                price: Number(this.state.price)
            }
            this.setState({
                id: this.state.id + 1
            })
            this.props.formData(temp)

        }
    }

    // ------------hide/show material drop down--------------//
    materialselect = () => {
        if (this.state.category == "Appliances") {
            this.setState({
                isappliances: true
            })
        }
        else {
            this.setState({
                isappliances: false
            })
        }
    }
    render() {
        // console.log(this.state)
        return (
            <div className="container">
                <div className="col-lg-12">
                    <div className="col-12">
                        <label className="m-2">ITEM NAME:</label>
                    </div>
                    <div className="col-12">
                        <input type="text" name="itemname" value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-12">
                        <label className="m-2">ITEM ID:</label>
                    </div>
                    <div className="col-12">
                        <input type="text" name="itemId" value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-12">
                        <label className="m-2">ITEM DESCRIPTION:</label>
                    </div>
                    <div className="col-12">
                        <input type="text" name="itemdesc" value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-12 my-2">select category
                        <select name="category" value={this.state.name} onChange={this.handleChange} onClick={this.materialselect}>
                            <option></option>
                            <option value="BedRoom">BedRoom</option>
                            <option value="LivingRoom">LivingRoom</option>
                            <option value="Dining">Dining</option>
                            <option value="Appliances">Appliances</option>
                        </select>

                    </div>
                    {this.state.isappliances && <div className="col-12 m-2">
                        select Material
                        <select name="material" value={this.state.name} onChange={this.handleChange}>
                            <option></option>
                            <option value="Teak">Teak</option>
                            <option value="Oak">Oak</option>
                            <option value="Walnut">Walnut</option>
                            <option value="Maple">Maple</option>
                        </select>
                    </div>}
                    <div className="col-12">
                        <label className="m-2">Price:</label>
                    </div>
                    <div className="col-12">
                        <input type="text" name="price" value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-12 m-2 text-center">
                        <button className="btn btn-primary" onClick={this.submitData}>Submit</button>
                    </div>
                </div>


            </div>
        )
    }
}
export default ProductForm