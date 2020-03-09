import React from 'react';
// import './Table.css';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employeesArr: this.props.data,
            // dept: "",
            // sortType: ""
        }
    }
    showThisDepartment = (e) => {
        // this.setState({ dept: e.target.value });
        // let deptName = this.state.dept
        let deptName= e.target.value
        if (deptName === 'all') {
            this.setState({ employeesArr: this.props.data })
        }
        else {
            let deptWiseArr = this.props.data.filter(each => {
                if (each.department === deptName) return each
            })
            this.setState({ employeesArr: deptWiseArr })
        }
    }
    salarySelect = (e) => {
        // this.setState({ sortType: e.target.value });
        // let sortType = this.state.sortType
        let sortType = e.target.value
        let sortedArr = []
        if (sortType === "increasing") {
            sortedArr = this.props.data.sort((a, b) => {
                if (a.salary > b.salary) {
                    return 1;
                }
                else return -1;
            })
            this.setState({ employeesArr: sortedArr })
        }
        else {
            sortedArr = this.props.data.sort((a, b) => {
                if (a.salary > b.salary) {
                    return -1;
                }
                else return 1;
            })
            this.setState({ employeesArr: sortedArr })
        }
    }

    render() {
        return (
            <div>
                <h2>Employees Data in Table format</h2>
                <div id="optionsDiv">
                    <select onChange={this.showThisDepartment}>
                        <option value="0">select</option>
                        <option value="all">Show All</option>
                        {this.props.depts.map(each =>
                            <option value={each}>{each}</option>
                        )}
                    </select>

                    <select onChange={this.salarySelect}>
                        <option value="0">select</option>
                        <option value="increasing">Ascending</option>
                        <option value="decreasing">Descending</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>0</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employeesArr.map(each => (
                            <tr key={each.name + each.age}>
                                <td>{each.name}</td>
                                <td>{each.age}</td>
                                <td>{each.address}</td>
                                <td>{each.department}</td>
                                <td>{each.salary}</td>
                                <td>
                                    <button onClick={() => this.props.removeEmployee(each.name + each.age)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table