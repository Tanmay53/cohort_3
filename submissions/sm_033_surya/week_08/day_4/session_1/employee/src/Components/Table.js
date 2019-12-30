import React from "react"

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maindata: [],
            showlabel: true,
            nodata: false,
            sortit: true,
            department: "",
            ddata: []
        }
    }
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem("userdata"))
        if (data == null) {
            this.setState({
                nodata: !this.state.nodata
            })
        }
        else {
            this.setState({
                maindata: data,
                ddata: data
            })
            this.props.datafromForm(data)

        }
    }
    componentWillUnmount() {
        this.props.check(false)
    }
    deletedData = (data) => {
        this.setState({
            ddata: this.state.ddata.filter((item) => item.id != data)
        })
    }
    sorting = () => {
        this.setState({
            sortit: !this.state.sortit
        })
        if (this.state.sortit == true) {
            this.setState({
                ddata: this.state.maindata.sort((a, b) => a.salary - b.salary)
            })
        }
        else {
            this.setState({
                ddata: this.state.maindata.sort((a, b) => b.salary - a.salary)
            })

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    select = () => {
        if (this.state.department == "All") {
            this.setState({
                ddata: this.state.maindata
            })
        }
        else {
            this.setState({
                ddata: this.state.maindata.filter((item) => item.department === this.state.department)
            })
        }
        console.log(this.state.department)

    }
    render() {
        console.log(this.state.department, "table");
        return (
            <div className="container"><h1>User Data</h1>
                <div className="row">
                    <button className="btn btn-success mx-3" onClick={this.sorting}>Sort</button>
                    <select name="department" className="form-control col-3" value={this.state.department} onChange={this.handleChange} onClick={this.select}>
                        <option></option>
                        <option value="All">All</option>
                        <option value="IT">IT</option>
                        <option value="GIS">GIS</option>
                        <option value="ACCOUNTS">ACCOUNTS</option>
                        <option value="PRO.DELIVERY">PRO.DELIVERY</option>
                    </select>
                </div>
                <table className="table my-5">
                    <thead className="thead-dark">
                        <tr><th>Name</th><th>Age</th><th>Address</th><th>Department</th><th>Salary</th><th></th><th></th></tr>
                    </thead>

                    <tbody>
                        {this.state.ddata.map((ele) => <tr value={ele.id}><td>{ele.name}</td><td>{ele.age}</td><td>{ele.address}</td><td>{ele.department}</td><td>{ele.salary}</td><td><button className="border-0" style={{ background: "none", color: "blue" }}>Edit</button></td><td><button style={{ background: "none", color: "red" }} className="border-0" onClick={() => this.deletedData(ele.id)}>Delete</button></td></tr>)}
                    </tbody>
                </table>
                {this.state.nodata && <h1>No Records</h1>}
            </div>
        )
    }
}
export default Table