import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateJob } from "../redux/action/actions";
class Edit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            place: "",
            jobTitle: "",
            jobQty: 1,
            salary: 0,

        }
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {

        let jobs = {
            companyName: this.state.companyName,
            place: this.state.place,
            jobTitle: this.state.jobTitle,
            jobQty: this.state.jobQty,
            salary: this.state.salary
        }

        this.props.update(jobs, this.props.match.params.id);

        this.reset();
    }

    handleSelect = (event) => {
        let [companyName, place] = event.target.value.split(" ");
        this.setState({
            companyName: companyName,
            place: place
        })
    }

    reset = () => {

        this.setState({
            companyName: "",
            place: "",
            jobTitle: "",
            jobQty: 1,
            salary: 0,
        })
    }

    componentDidMount() {
        let id = this.props.match.params.id
        let data = this.props.jobList.find((ele, index) => index == id);


        this.setState({
            companyName: data.companyName,
            place: data.place,
            jobTitle: data.jobTitle,
            jobQty: data.jobQty,
            salary: data.salary,
        })
    }
    render() {
        console.log("props", this.props);
        return (
            <>
                <div className="container border border-dark mt-5">
                    <h1 className="text-center mt-5 text-danger">Update Jobs</h1>
                    <div className="p-5">
                        <div className="form-group ">
                            <h4 className="text-primary font-wight-normal text-center">{this.state.companyName + "-" + this.state.place}</h4>
                            <label htmlFor="exampleFormControlSelect1">Select Comapany</label>
                            <select

                                className="form-control"
                                onChange={this.handleSelect}
                            >
                                <option value="">Select Company</option>
                                {this.props.companyList && this.props.companyList.map((ele, index) => (
                                    <option key={index} value={ele.companyName + " " + ele.place}>{ele.companyName} - {ele.place} </option>
                                ))}


                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.jobTitle}
                                onChange={this.handleChange}
                                name="jobTitle"
                                id="jobTitle"
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="jobQty">No. Of Jobs</label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.jobQty}
                                onChange={this.handleChange}
                                name="jobQty"
                                id="jobQty"
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="salary">Salary</label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.salary}
                                onChange={this.handleChange}
                                name="salary"
                                id="salary"
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

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companyList: state.companyList,
        jobList: state.jobList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (jobs, id) => dispatch(updateJob(jobs, id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
