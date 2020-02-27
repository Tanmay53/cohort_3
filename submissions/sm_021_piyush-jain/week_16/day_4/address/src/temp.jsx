import React from 'react'
import { Link } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import axios from "axios"


class Extra_Address extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "props": props.value,
            "id":props.id,
            "line_1": "",
            "line_2": "",
            "pincode": "",
            "city": "",
        }
    }
    handleChange = (e) => {
        // e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:5000/create_address", { "line_1": this.state.line_1,"add_id":this.state.props, "id": this.state.id, "line_2": this.state.line_2, "pincode": this.state.pincode, "city": this.state.city })
    }
    render() {
        return (
            <div >
                <div>Address no: {this.state.props}</div>
                <div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Line_1</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="line_1"onChange={this.handleChange} placeholder="House No, street" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Line_2</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="line_2" onChange={this.handleChange} placeholder="block ,area" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">City</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="city" onChange={this.handleChange} placeholder="City" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Pincode</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="pincode" onChange={this.handleChange} placeholder="Pincode" required />
                    </div>
                    <button onClick={this.handleClick}>Submit</button>
                </div>
            </div>
        )
    }
}

class Add_Address extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "name": "",
            "id": 0,
            "email": "",
            "phone": 0,
            "line_1": "",
            "line_2": "",
            "pincode": "",
            "city": "",
            "address": [],
            "address_count": 0,
            "temp_count": 0
        }
    }
    componentDidMount = async () => {

        // getting the user detail thru below axios call
        await axios.get(`http://127.0.0.1:5000/get_user/${this.props.match.params.id}`)
            .then(res => this.setState({
                id: res.data[0]["id"],
                name: res.data[0]["name"],
                email: res.data[0]["email"],
                phone: res.data[0]["number"],
            }))

        // getting that user's address
        await axios.get(`http://127.0.0.1:5000/get_address/${this.props.match.params.id}`)
            .then(res => this.setState({
                address: res.data
            }))
        this.setState({
            address_count: this.state.address.length
        })
    }
    // function to add one more address
    handleIncrement = () => {
        this.setState({
            temp_count: this.state.temp_count + 1
        })
    }
    // function to remove one address 
    handleDecrement = () => {
        if (this.state.temp_count != 0)
            this.setState({
                temp_count: this.state.temp_count - 1
            })
    }
    // update the state
    handleChange = (e) => {
        console.log("called here")
        [e.target.name] = e.target.value
    }

    render() {
        var all_address = []

        for (var i = 0; i < this.state.temp_count; i++) {
            let temp = i + this.state.address_count + 1
            all_address.push(<Extra_Address value={temp} id={this.props.match.params.id} />)
        }
        return (
            <React.Fragment>
                <div>
                    <input type="text" placeholder={this.state.id}></input>
                    <input type="text" placeholder={this.state.name}></input>
                    <input type="text" placeholder={this.state.email}></input>
                    <input type="text" placeholder={this.state.phone}></input>
                </div>
                <button onClick={this.handleIncrement}>+1</button><button onClick={this.handleDecrement}>-1</button>
                {this.state.address.map(item =>
                    <div>
                        <input type="text" placeholder={item.line_1}></input>
                        <input type="text" placeholder={item.line_2}></input>
                        <input type="text" placeholder={item.pincode}></input>
                        <input type="text" placeholder={item.city}></input>
                    </div>
                )}
                {all_address}
            </React.Fragment>
        )
    }
}

export default Add_Address