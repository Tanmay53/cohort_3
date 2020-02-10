import React from 'react'
import axios from "axios"
import { Redirect, Link } from 'react-router-dom'

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            name: "",
            email: "",
            mobile: "",
            age: 1,
            data: {},
            age_array: [],
            gotohome: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
        console.log(this.props.match.params.id)
        axios.get("http://localhost:5000/listing")
            .then((res) => {
                this.setState({
                    data: res.data.data_list.find((ele) => ele.id == this.props.match.params.id)
                })
                this.finddata(this.state.data)
            })
    }
    finddata = (data) => {
        this.setState({
            id: data.id,
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            age: data.age
        })
    }
    handleClick = () => {
        alert("user updatedc")
        axios.patch(`http://localhost:5000/edit/${this.props.match.params.id}`, { "id": this.state.id, "name": this.state.name, "email": this.state.email, "mobile": this.state.mobile, "age": this.state.age })
            .then((res) => console.log(res))
        this.setState({
            gotohome: true
        })
    }
    render() {
        if (!this.state.gotohome) {
            return (
                <>
                    <div className="container">
                        <div className="row offset-3">
                            <div className="col-12">
                                <label>Name</label>
                            </div>
                            <div className="col-6 ">
                                <input name="name" className="col-12" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="col-12">
                                <label>Email</label>
                            </div>
                            <div className="col-6 ">
                                <input name="email" className="col-12" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="col-12">
                                <label>Mobile</label>
                            </div>
                            <div className="col-6 ">
                                <input name="mobile" className="col-12" value={this.state.mobile} onChange={this.handleChange} />
                            </div>
                            <div className="col-12">
                                <label>Age</label>
                            </div>
                            <div className="col-6 ">
                                <select name="age" value={this.state.age} onChange={this.handleChange}>
                                    {this.state.age_array.map((ele) => <option value={ele}>{ele}</option>)}
                                </select>
                            </div>
                            <div className="col-12">
                                <button onClick={this.handleClick}>Submit</button>
                            </div>

                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <div className="container text-center">
                    <Link to="/">Go to home </Link>
                </div>
            )
        }

    }
}
export default Edit