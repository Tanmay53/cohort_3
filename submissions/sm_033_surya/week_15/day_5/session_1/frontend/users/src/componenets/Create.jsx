import React from 'react'
import axios from 'axios'

class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            name: "",
            email: "",
            mobile: "",
            age: 1,
            data: {},
            age_array: []
        }
    }
    async componentDidMount() {
        let i = 1
        let temp_array = []
        while (i <= 100) {
            temp_array.push(i)
            i++
        }
        this.setState({
            age_array: temp_array
        })
        await axios.get("http://localhost:5000/listing")
            .then((res) => {
                if (res.data.length != 0) {
                    console.log();
                    this.setState({
                        id: Number(res.data.data_list[res.data.data_list.length - 1]["id"])+1
                    })
                }
            }
            )

        //  console.log(this.state.data[this.state.data.length-1]["id"])
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        this.setState({
            id: Number((this.state.id)) + 1
        })

        axios.post("http://localhost:5000/create", { "id": this.state.id, "name": this.state.name, "email": this.state.email, "mobile": this.state.mobile, "age": this.state.age })
            .then((res) =>
                console.log(res)
            )
        this.setState({
            name: "",
            email: "",
            mobile: "",
            age: "1",
        })
    }
    render() {
        console.log(this.state,"ddd")
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
}
export default Create