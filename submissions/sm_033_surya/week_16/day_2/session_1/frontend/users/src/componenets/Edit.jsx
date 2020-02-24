import React from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'

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
        axios.get(`http://localhost:5000/edit/${this.props.match.params.id}`)
            .then((res) => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    email: res.data.email,
                    mobile: res.data.mobile,
                    age: res.data.age
                })
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
                        <div className="row offset-4">
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
                            <div className="col-12">
                                <select name="age" className="btn btn-light" value={this.state.age} onChange={this.handleChange}>
                                    {this.state.age_array.map((ele) => <option value={ele}>{ele}</option>)}
                                </select>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <button className="btn btn-warning" onClick={this.handleClick}>Update</button>
                            </div>

                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <div className="container text-center">
                    <Redirect to={`/user/${this.props.match.params.id}`} />
                </div>
            )
        }

    }
}
export default Edit