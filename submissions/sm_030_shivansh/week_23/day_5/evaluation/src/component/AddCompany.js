import React, { Component } from 'react'
import { connect, ReactReduxContext } from "react-redux";
import { addCompany } from "../redux/action/actions";

class AddCompany extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            place: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        console.log("Hello");
        let company = {
            companyName: this.state.companyName,
            place: this.state.place
        }


        this.props.addCompany(company);
        this.reset();
    }

    reset = () => {
        this.setState({
            companyName: "",
            place: "",
        })
    }

    render() {
        return (
            <div className="container">

                <div className="p-5 border my-5">
                    <h1 className="text-center">Add Company</h1>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.companyName}
                            onChange={this.handleChange}
                            name="companyName"
                            id="companyName"
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.place}
                            onChange={this.handleChange}
                            name="place"
                            id="location"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => this.handleClick()}
                        >Submit
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}




const mapDispatchToProps = (dispatch) => {
    return {
        addCompany: (value) => dispatch(addCompany(value))
    }
}



export default connect(null, mapDispatchToProps)(AddCompany)
