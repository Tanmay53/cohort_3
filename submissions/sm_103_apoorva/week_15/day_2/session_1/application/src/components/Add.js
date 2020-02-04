import React from 'react'
import axios from 'axios'

class Add extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            item_name : '',
            quantity : ''
        }
    }

    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit = (event) =>
    {
        event.preventDefault()
        let item = this.state.item_name
        let quantity = this.state.quantity
        alert(item+" Added")
        axios.post('http://127.0.0.1:5000/create',{
            items : item,
            quantity : quantity
        }).then
        (res =>
            console.log(res)
        ).catch(error => console.log(error))
        
    }
    

    render()
    {
        return(
            <div className="p-5">
                <h1 className="text-info text-center">Add Items</h1>
                <form onSubmit={this.submit} className="w-25  p-5 m-auto border border-info">
                    <div className="form-group">
                        <label>Item Name</label>
                        <input type="name" className="form-control" id="items" aria-describedby="emailHelp" name = "item_name" onChange={this.handleChange} placeholder="Enter Item Name" />
                    </div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <select className="form-control" name = "quantity"  onChange={this.handleChange}>
                            <option>Choose Quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

export default Add