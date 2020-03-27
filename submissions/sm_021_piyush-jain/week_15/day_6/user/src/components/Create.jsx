import React from 'react'
import axios from 'axios'
class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "name": "",
            "age": 0,
            "email": "",
            "mobile": 0,
            "options": []
        }
    }

    // get the initial id and age options
    componentDidMount = () => {
        axios.get("http://127.0.0.1:5000/options")
            .then(res => this.setState({
                options: res.data
            }))
        axios.get("http://127.0.0.1:5000/create")
            .then(res => this.setState({
                id: res.data
            }))
    }

    // set the state by input
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // function to add a new user
    handleSubmit = () => {
        this.setState({
            id: this.state.id + 1
        })
        axios.post("http://127.0.0.1:5000/create", { "name": this.state.name, "age": this.state.age, "email": this.state.email, "mobile": this.state.mobile, "id": this.state.id })
            .then(alert("User has been Created !!"))
            .then(this.props.history.goBack)
    }


    render() {
        console.log(this.state)
        return (
            <>
                <div class="d-flex justify-content-center mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <div style={{ "width": "400px", "padding": "40px", "backgroundColor": "teal" }}>
                        <h3 style={{ "textAlign": "center", "color": "white", "margin": "0px 0px 30px 0px " }}>Enter the Details</h3>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default"><span class="text-danger">Name</span></span>
                            </div>
                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder={this.state.name} name="name" onChange={this.handleChange} />
                        </div>
                        <select name="age" onChange={this.handleChange} style={{ "width": "100%" }}>
                            <option>Select Age</option>
                            {this.state.options.map((ele, index) => <option value={ele} key={index}>{ele}</option>)}
                        </select>
                        <br></br><br></br>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default"><span class="text-danger">Email</span></span>
                            </div>
                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default"><span class="text-danger">Mobile</span></span>
                            </div>
                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder={this.state.mobile} name="mobile" onChange={this.handleChange} />
                        </div>

                        <button class="btn btn-success" style={{ "marginLeft": "130px" }} onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Create
