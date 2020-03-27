import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "name": "",
            "age": "",
            "email": "",
            "mobile": ""
        }
    }

    // get the details of the user chosen from the list
    componentDidMount = () => {
        axios.get(`http://127.0.0.1:5000/show/${this.props.match.params.id}`)
            .then(res => this.setState({
                id: this.props.match.params.id,
                name: res.data[0].name,
                age: res.data[0].age,
                email: res.data[0].email,
                mobile: res.data[0].mobile
            }))
    }

    render() {
        return (
            <div class="d-flex justify-content-center mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                <div class="card text-center" style={{ "min-width": "400px", }}>
                    <div class="card-header" style={{ "backgroundColor": "teal" }}>
                        <b class="text-white">ID : {this.state.id}</b>
                    </div>
                    <div class="card-body ">
                        <h5 class="card-title my-4"><b><span class="glyphicon glyphicon-user mr-3"></span>Name : {this.state.name}</b></h5>
                        <h5 class="card-text my-4"><b><span class="glyphicon glyphicon-envelope mr-3"></span>Email : {this.state.email}</b></h5>
                        <h5 class="card-text mb-4"><b>Age : {this.state.age}</b></h5>
                        <button type="button" class="btn btn-primary" ><Link to="/list" style={{ "textDecoration": "none" }}>View All Users</Link></button>
                    </div>
                    <div class="card-footer " style={{ "backgroundColor": "teal" }}>
                        <b class="text-white"><span class="glyphicon glyphicon-earphone mr-3"></span>Mobile :  {this.state.mobile}</b>
                    </div>
                </div>
            </div>
        )
    }
}
export default Show
