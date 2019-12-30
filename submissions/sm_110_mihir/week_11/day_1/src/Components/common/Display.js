import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
class Display extends Component {
    constructor(props) {
        super(props);
        console.log("display called");
    }
    render() {
        if (!this.props.isLoggedIn) return <Redirect to="/login" />;
        const list = this.props.staffList.map(ele => (
            <tr key={ele.name}>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.sales}</td>
            </tr>
        ));
        return (
            <div>
                <h1 className="bg-primary text-white p-2">All staff List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>sales for FY2019-2020</th>
                        </tr>
                    </thead>
                    <tbody>{list}</tbody>
                </table>
                <hr />
                <Link to="/admin">
                    <button className="btn btn-primary p-2 m-2">
                        Go to Dashboard
                    </button>
                </Link>
            </div>
        );
    }
}

const mapState = state => {
    return {
        staffList: state.staffList,
        isLoggedIn: state.isLoggedIn
    };
};

export default connect(mapState)(Display);
