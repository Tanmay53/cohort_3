import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

class Delete extends React.Component {
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

    // get the selected user details
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

    // function written to delete that user
    handleDelete = () => {
        axios.post(`http://127.0.0.1:5000/delete/${this.props.match.params.id}`)
            .then(alert("User has been deleted !!"))
            .then(this.props.history.goBack)
    }

    render() {
        return (
            <div class="d-flex justify-content-center mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                <div style={{ "width": "400px", "padding": "40px", "backgroundColor": "teal" }}>
                    <h3 style={{ "textAlign": "center", "color": "white", "margin": "0px 0px 30px 0px " }}>Enter the Details</h3>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default"><span class="text-danger">Name</span></span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.name} />
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default"><span class="text-danger">Age</span></span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.age} />
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default"><span class="text-danger">Email</span></span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.email} />
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default"><span class="text-danger">Mobile</span></span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.mobile} />
                    </div>

                    <div class="d-flex justify-content-center">
                        <button class="btn btn-success mx-2"><Link to="/list" style={{ "textDecoration": "none", "color": "white" }}>Go Back</Link></button>
                        <button class="btn btn-danger mx-2" onClick={this.handleDelete}>Delete</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default Delete
