import React from 'react'
import CartForm from './CartForm';
import CartTable from './CartTable';



class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalPrice: 0,
            name: "",
            id: "",
            desc: "",
            category: "",
            price: ""
        }


    }

    formData = (name, id, desc, category, price) => {

        console.log("add", name, id, desc, category, price);


        this.setState({
            totalPrice: Number(this.state.totalPrice) + Number(price),
            name: name,
            id: id,
            desc: desc,
            category: category,
            price: price
        })

    }

    render() {
        return (
            <div className="text-center">
                <CartForm function={this.formData} />
                <CartTable />
                <h1>Total Price : <i class="fas fa-rv mr-1"></i>{this.state.totalPrice}</h1>
            </div>
        )
    }
}

export default Cart;