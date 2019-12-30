import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
function Dashboard(props) {
    if (!props.isLoggedIn) return <Redirect to="/login" />;
    else
        return (
            <div>
                <div className="container mt-2 w-50 text-left">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{props.data.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{props.data.email}</td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>{props.data.username}</td>
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td>{props.data.mobile}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{props.data.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
}

const mapStateToProps = state => ({
    data: state.data,
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Dashboard);
