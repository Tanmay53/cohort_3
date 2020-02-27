import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // "db": [],
            "address": [],
            "id": 0,
            "add_id": 1,
            "name": "",
            "email": "",
            "password": "",
            "number": 0,
        }
    }
    componentDidMount = async () => {
        await axios.get(`http://127.0.0.1:5000/user/detail/${this.props.match.params.id}`)
            .then(res => this.setState({
                id: res["data"][0]["id"],
                name: res["data"][0]["name"],
                number: res["data"][0]["number"],
                password: res["data"][0]["password"],
                email: res["data"][0]["email"]
            }))
        await axios.get(`http://127.0.0.1:5000/user/address_detail/${this.props.match.params.id}`)
            .then(res => this.setState({
                address: res["data"]
            }))
    }
    handleDelete = (item)=>{
    var id=item.id;
    var add_id=item.add_id
    console.log(id,add_id)
    axios.get(`http://127.0.0.1:5000/del_user_address/${id}/${add_id}`)
}
render() {
    console.log(this.state)
    return (
        <React.Fragment>
            <div>
                <h4 style={{ "textAlign": "center", "margin": "2%" }}><i>Hello <span style={{ "color": "red" }}>{this.state.name}</span> with email as <span style={{ "color": "red" }}>{this.state.email}  </span>and Mobile No. as <span style={{ "color": "red" }}>{this.state.number}</span></i></h4>
                <h6 style={{ "textAlign": "center" }} class="mb-4">Following is the list of all your addresse's</h6>
                {this.state.address.map(item =>
                    <div class="card mb-3 shadow p-3 mb-5 bg-white rounded" style={{ "max-width": "50%", "max-height": "100%", "marginLeft": "25%", "padding": "1%" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="https://images.livemint.com/img/2020/02/07/600x338/google_maps_1581073105547.jpeg" style={{ "height": "100%" }} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-info" style={{ "textAlign": "center" }}>ADDRESS</h5>
                                    <p class="card-text " style={{ "justifyContent": "auto" }}>{item.line_1}  {item.line_2}  {item.pincode}  {item.city}</p>
                                    <p class="card-text"><small class="text-muted">Thank you for Trusting us</small></p>
                                    <div class="card-text"><button class="float-left btn btn-warning" ><Link to={`/modify_address/${item.id}/${item.add_id}`}>Edit Address</Link></button><button class="float-right btn btn-danger" onClick={()=>this.handleDelete(item)}>Delete Address</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}
}

export default Detail