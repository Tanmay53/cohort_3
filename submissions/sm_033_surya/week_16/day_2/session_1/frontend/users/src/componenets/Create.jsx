import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            mobile: "",
            age: 1,
            data: {},
            age_array: [],
            go_back: false
        }
    }
    componentDidMount() {
        let i = 1
        let temp_array = []
        while (i <= 100) {
            temp_array.push(i)
            i++
        }
        this.setState({
            age_array: temp_array
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        axios.post("http://localhost:5000/create", { "name": this.state.name, "email": this.state.email, "mobile": this.state.mobile, "age": this.state.age })
            .then((res) =>
                console.log(res)
            )
        this.setState({
            name: "",
            email: "",
            mobile: "",
            age: "1",
        })
        alert("user Successfully Added")
        this.setState({
            go_back: true
        })
    }
    render() {
        console.log(this.state, "ddd")
        if (!this.state.go_back) {
            return (
                <>
                    <div className="container">
                        <div className="row offset-4">
                            <div className="col-12">
                                <label>Name</label>
                            </div>
                            <div className="col-6 ">
                                <input name="name" placeholder="Please enter username" className="col-12" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="col-12">
                                <label>Email</label>
                            </div>
                            <div className="col-6 ">
                                <input name="email" className="col-12" placeholder="Please enter password" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="col-12">
                                <label>Mobile</label>
                            </div>
                            <div className="col-6 ">
                                <input name="mobile" className="col-12" placeholder="Please enter mobile no." value={this.state.mobile} onChange={this.handleChange} />
                            </div>
                            <div className="col-12">
                                <label>Age</label>
                            </div>
                            <div className="col-12">
                                <select name="age" className="brn btn-light" value={this.state.age} onChange={this.handleChange}>
                                    {this.state.age_array.map((ele) => <option value={ele}>{ele}</option>)}
                                </select>
                            </div>
                            <div className="col-6 text-center">
                                <button className="btn btn-success" onClick={this.handleClick}>Submit</button>
                            </div>

                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <Redirect to="/" />
            )
        }
    }
}
export default Create