import React from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import $ from "jquery"

class Extra_Address extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "props": props.value,
            "id": props.id,
            "line_1": "",
            "line_2": "",
            "pincode": "",
            "city": "",
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        // $(`#${this.state.props}`).hide()
        axios.post("http://127.0.0.1:5000/add/create_address", { "line_1": this.state.line_1, "add_id": this.state.props, "id": this.state.id, "line_2": this.state.line_2, "pincode": this.state.pincode, "city": this.state.city })
    }
    render() {
        console.log(this.state)
        return (
            <div >
                <div id={this.state.props} style={{ "color": "#DC143C", "width": "50%", "marginLeft": "25%", "padding": "1%", "fontSize": "20px" }} class="shadow-lg p-3 mb-5 bg-white rounded mt-2">
                    <h3 class="mt-2 mb-2 lead" style={{ "textAlign": "center", "color": "blue", "textDecoration": "underline" }}>Address no: {this.state.props}</h3>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Line_1</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" name="line_1" onChange={this.handleChange} placeholder="House No, street" required />
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
                        <button onClick={this.handleClick} class="btn btn-dark" style={{ "marginLeft": "45%", "color": "white" }}>Submit</button>
                    </form>
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
        await axios.get(`http://127.0.0.1:5000/user/get_user/${this.props.match.params.id}`)
            .then(res => this.setState({
                id: res.data[0]["id"],
                name: res.data[0]["name"],
                email: res.data[0]["email"],
                phone: res.data[0]["number"],
            }))

        // getting that user's address
        await axios.get(`http://127.0.0.1:5000/add/get_address/${this.props.match.params.id}`)
            .then(res => this.setState({
                address: res.data
            }))
        this.setState({
            address_count: this.state.address.length
        })
        console.log(this.state.address)
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
        console.log(this.state)
        return (
            <React.Fragment>
                <div>
                    <h4 style={{ "textAlign": "center", "margin": "2%" }}><i>Hello <span style={{ "color": "red" }}>{this.state.name}</span> with email as <span style={{ "color": "red" }}>{this.state.email}  </span>and Mobile No. as <span style={{ "color": "red" }}>{this.state.phone}</span></i></h4>
                    <h6 style={{ "textAlign": "center", "margin": "1%" }}>Click on the <span style={{ "color": "red", "font-size": "2em" }}> + </span> to add another address or<span style={{ "color": "green", "font-size": "2em" }}> - </span> to remove added one</h6>
                    <h6 style={{ "textAlign": "center" }} class="mb-4">Following is the list of all your addresse's</h6>
                </div>
                {this.state.address.map(item =>
                    <div class="card mb-3 shadow p-3 mb-5 bg-white rounded" style={{ "max-width": "50%","max-height":"100%" ,"marginLeft": "25%", "padding": "1%" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="https://images.livemint.com/img/2020/02/07/600x338/google_maps_1581073105547.jpeg" style={{"height":"100%"}}class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-info" style={{"textAlign":"center"}}>ADDRESS</h5>
                                        <p class="card-text " style={{"justifyContent":"auto"}}>{item.line_1}  {item.line_2}  {item.pincode}  {item.city}</p>
                                    <p class="card-text"><small class="text-muted">Thank you for Trusting us</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div style={{"marginLeft":"45%","marginBottom":"2%"}}>Add  <button onClick={this.handleIncrement} class="btn btn-success">+ 1</button><button class="btn btn-danger" onClick={this.handleDecrement}>- 1</button>   Remove</div>
                {all_address}
            </React.Fragment>
        )
    }
}

export default Add_Address