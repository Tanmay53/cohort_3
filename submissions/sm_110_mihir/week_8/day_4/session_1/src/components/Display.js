import React from "react";

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all",
            sort: ""
        };
        this.listArr = [];
    }

    handleFilter = e => {
        this.setState({
            filter: e.target.value
        });
    };
    sortAsc = () => {
        this.setState({
            sort: "asc"
        });
    };
    sortDsc = () => {
        this.setState({
            sort: "dsc"
        });
    };
    list = () =>
        this.listArr.map(ele => {
            return (
                <tr key={ele.name}>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.address}</td>
                    <td>{ele.department}</td>
                    <td>{ele.salary}</td>
                    <td>
                        <button onClick={() => this.props.delete(ele)}>
                            Delete
                        </button>
                    </td>
                    <td>
                        {/* <button
                        onClick={() => {
                            props.editItem(ele);
                        }}
                    >
                        Edit
                    </button> */}
                    </td>
                </tr>
            );
        });
    render() {
        if (this.state.filter === "all")
            this.listArr = this.props.data.map(ele => ele);
        else
            this.listArr = this.props.data.filter(
                ele => ele.department === this.state.filter
            );

        if (this.state.sort === "asc")
            this.listArr.sort(function(a, b) {
                if (a.salary <= b.salary) return 1;
                else return -1;
            });
        else if (this.state.sort === "dsc")
            this.listArr.sort(function(a, b) {
                if (a.salary >= b.salary) return 1;
                else return -1;
            });
        console.log(this.listArr);
        return (
            <div>
                <label htmlFor="filter">Filter</label>
                <select
                    name="filter"
                    id=""
                    className="custom-select"
                    onChange={this.handleFilter}
                    value={this.state.filter}
                >
                    <option value="all">See all</option>
                    <option value="IT">IT</option>
                    <option value="sales">sales</option>
                    <option value="manager">manager</option>
                    <option value="operations">operations</option>
                </select>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>
                                <button className="btn" onClick={this.sortAsc}>
                                    <i class="fas fa-sort-up"></i>
                                </button>
                            </th>
                            <th>
                                <button className="btn" onClick={this.sortDsc}>
                                    <i class="fas fa-sort-down"></i>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>{this.list()}</tbody>
                </table>
            </div>
        );
    }
}

export default Display;
