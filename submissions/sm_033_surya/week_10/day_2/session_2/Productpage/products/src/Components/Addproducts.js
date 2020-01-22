import React from 'react'
import { connect } from "react-redux"
import { add } from "../Common/actions"

class Addproducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            UUID: "",
            Cost: "",
            Description: "",
            Category: "",
            imageurl: "https://via.placeholder.com/350x250",
            id: 0
        }
    }
    handleSubmit = () => {
        this.setState({
            id: this.state.id + 1
        })
        let temp = {
            Name: this.state.Name,
            UUID: this.state.UUID,
            Cost: this.state.Cost,
            Description: this.state.Description,
            Category: this.state.Category,
            imageurl: this.state.imageurl,
            id: this.state.id
        }
        this.props.dispatch(add(temp))
    }



    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
                <div className="col-6 offset-3">
                    <label className="col-12" >Product Name
                    <input className="col-12" type="text" name="Name" value={this.state.Name} onChange={this.handlechange} />
                    </label>
                    <label className="col-12">Product UUID
                <input className="col-12" type="text" name="UUID" value={this.state.UUID} onChange={this.handlechange} />

                    </label>
                    <label className="col-12">Product Cost
                    <input type="text" className="col-12" name="Cost" value={this.state.Cost} onChange={this.handlechange} />
                    </label>
                    <label className="col-12">Product Description
                <input type="text" className="col-12" name="Description" value={this.state.Description} onChange={this.handlechange} />
                    </label>
                    <label className="col-12" >Product Category </label>
                    <select className="col-3 mx-4" name="Category" value={this.state.Category} onChange={this.handlechange}>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Books">Books</option>
                        <option value="Toys">Toys</option>
                    </select>
                    <label className="col-12">Product ImageUrl
                <input className="col-12" type="text" name="imageurl" value={this.state.imageurl} onChange={this.handlechange} />
                    </label>
                    <div className="text-center">
                        <button className="btn btn-success" onClick={this.handleSubmit}>ADD</button>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.addReducer.mainData

    }
}

export default connect(mapStateToProps)(Addproducts)