import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logout } from "../../Redux/actions";
function Dashboard(props) {
    if (props.isLoggedIn)
        return (
            <div>
                <h1 className="bg-primary text-white">Dashboard</h1>
                <Link to="/form">
                    <button className="btn btn-primary p-2 m-2">
                        Add new staff
                    </button>
                </Link>
                <Link to="/display">
                    <button className="btn btn-success p-2 m-2">
                        View all staff
                    </button>
                </Link>
                <button
                    className="btn btn-danger p-2 m-2"
                    onClick={props.logout}
                >
                    LOGOUT
                </button>
            </div>
        );
    else return <Redirect to="/login" />;
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};

export default connect(mapStateToProps, { logout })(Dashboard);
