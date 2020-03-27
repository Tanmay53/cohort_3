import React, { Component } from "react";
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { employee: "Aditya", gender: "male", department: "Front End", salary: "54567", id: "1" },
                { employee: "Ankur", gender: "male", department: "Software", salary: "43567", id: "2" },
                { employee: "Pratibha", gender: "female", department: "Full Stack", salary: "84567", id: "3" }
            ],
            
            employee: "",
            gender: "",
            department: "",
            salary: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.genderSorting = this.genderSorting.bind(this)
    }
    salarySortingAsc = (e) => {
        e.preventDefault()
        // alert("sort")
        let salaryArr = []
        
         salaryArr =    this.state.items.sort((a, b) => (a.salary - b.salary))
         this.setState({items : salaryArr})
    }
    salarySortingDsc = (e) => {
        e.preventDefault()
        // alert("sort")
        let salaryArr = []
        
         salaryArr =    this.state.items.sort((a, b) => (b.salary - a.salary))
         this.setState({items : salaryArr})
    }
    genderSorting (e){
        e.preventDefault()
       let filterdata = []
       let filterdata2 = []
       filterdata = this.state.items.filter(ele => ele.gender ==="male")
       this.setState({items : filterdata})
        
        filterdata2 = this.state.items.filter(ele => ele.gender ==="female")
       this.setState({items : filterdata2})
    }
    // functions
    delete(e) {
        this.state.items.splice(this.state.items.indexOf(e), 1);
        this.setState({ items: this.state.items });
    }
    handleChange(e) {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.employee.length && !this.state.department.length && !this.state.salary.length) {
            return;
        }
        const newItem = {
            employee: this.state.employee,
            gender: this.state.gender,
            department: this.state.department,
            salary: this.state.salary,
            id: Date.now(),
        };
        this.state.items.unshift(newItem);
        this.setState({ items: this.state.items });
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <div className="border border-success p-5">
                        <div className="row">
                            <div className="col-5">
                                <h3> Employee Name :</h3>
                                <input
                                    type="text"
                                    value={this.state.employee}
                                    name="employee"
                                    placeholder="Enter employee Name"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="col-5">
                                <h3> Gender : </h3>
                                <select name="gender" id="gender" onChange={this.handleChange}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    value={this.state.gender}
                                    
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <h3> department : </h3>
                                <select name="department" id="department" onChange={this.handleChange}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="frontend">Frontend</option>
                                    <option value="fullstack">Fullstack</option>
                                    <option value="softwaredeveloper">Software Developer</option>
                                    
                                </select>
                            </div>
                            <div className="col-5">
                                <h3>Salary</h3>
                                <input
                                    type="number"
                                    value={this.state.salary}
                                    name="salary"
                                    placeholder="Enter salary"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn save-btn">
                            Save
                        </button>
                    </div>
                </form>

                {/*  Render Data */}

                <table className="crud-table">
                    <thead>
                        <tr>
                            <th>si no.</th>
                            <th>
                                Employee Name
                            </th>
                            <th>
                            <div className="col-5">
                                <h3> Gender : </h3>
                                <select name="gender" id="gender" onChange={this.genderSorting}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            </th>
                            <th>Department</th>
                            <th>
                                <h1>Salary</h1>
                                <button onClick= {this.salarySortingAsc}>Ascending</button>
                                <button  onClick= {this.salarySortingDsc}>Descending</button>
                            </th>
                            <th>Delete Data</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((item, index) => (
                            <tr key={item.id + index}>
                                <td>{index + 1}</td>
                                <td className={item.showHide ? "hidden" : ""}> {item.employee} </td>
                                <td className={item.showHide ? "hidden" : ""}> {item.gender} </td>
                                <td className={item.showHide ? "hidden" : ""}> {item.department} </td>
                                <td className={item.showHide ? "hidden" : ""}> {item.salary} </td>
                                <td>
                                    <button
                                        className="btn del-btn"
                                        onClick={() => this.delete(item)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Home;