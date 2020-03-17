/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addClasses, addTeachers } from "../redux/action/actions";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class1: "",
      section: "",
      teacherName: "",
      subject: "",
      sections: "",
      class2: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addClass = () => {
    const { class1, section } = this.state;
    const { addClasses } = this.props;
    addClasses({ class1, section });
  };

  addTeacher = () => {
    const { class2, sections, teacher, subject } = this.state;
    const { addTeachers } = this.props;
    addTeachers({ class2, sections, teacher, subject });
  };

  render() {
    const { teachers, classes } = this.props;
    const { class2 } = this.state;
    var classsOption = classes.map(ele => {
      console.log(Object.keys(ele)[0]);
      return <option value={Object.keys(ele)[0]}>{Object.keys(ele)[0]}</option>;
    });
    let idGen = 0;
    var sectionOption = [];
    let arr = classes.map(ele => {
      if (Object.keys(ele)[0] === class2) {
        console.log(Object.values(ele)[0]);
        sectionOption = Object.values(ele)[0].map(x => {
          return <option value={x}>Section - {x}</option>;
        });
      }
    });
    console.log(this.state.class2);

    return (
      <div>
        <div className="row d-flex justify-content-center">
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="#filter">Filter By Class</label>
              <select id="filter" className="form-control">
                <option value="all">All</option>
                {classsOption.map(ele => {
                  return ele;
                })}
              </select>
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="#teacher">Add Teacher </label>
              <input
                type="text"
                id="teacher"
                name="teacher"
                className="form-control"
                onChange={this.handleChange}
              />
              <label htmlFor="#subject">Add Subject </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                onChange={this.handleChange}
              />
              <div className="form-group">
                <label htmlFor="#class2">class</label>
                <select
                  id="class2"
                  name="class2"
                  className="form-control"
                  onChange={this.handleChange}
                >
                  <option value="">Choose</option>

                  {classsOption.map(ele => {
                    return ele;
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="#sections">section</label>
                <select
                  id="sections"
                  name="sections"
                  className="form-control"
                  onChange={this.handleChange}
                >
                  <option value="">Choose</option>

                  {sectionOption.map(ele => {
                    return ele;
                  })}
                </select>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.addTeacher}
              >
                Add Teacher and Subject
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="#class1">Add class </label>
              <input
                type="text"
                id="class1"
                name="class1"
                className="form-control"
                onChange={this.handleChange}
              />
              <label htmlFor="#section">Add Section </label>
              <input
                type="text"
                id="section"
                name="section"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary py-2"
              onClick={this.addClass}
            >
              Add Class And Section
            </button>
          </div>
        </div>
        <div className="table-responsive-lg">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #
                </th>
                <th scope="col" className="text-center">
                  Name
                </th>
                <th scope="col" className="text-center">
                  Class
                </th>
                <th scope="col" className="text-center">
                  Section
                </th>
                <th scope="col" className="text-center">
                  Subject
                </th>
                <th scope="col" className="text-center">
                  Edit
                </th>
                <th scope="col" className="text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {teachers.map(ele => {
                idGen += 1;
                return (
                  <tr key={idGen}>
                    <td className="text-center">{idGen}</td>
                    <td className="text-center">{ele.teacher}</td>
                    <td className="text-center">{ele.class2}</td>
                    <td className="text-center">{ele.sections}</td>
                    <td className="text-center">{ele.subject}</td>
                    <td className="text-center">
                      <Link to={`/home/edit/${ele.id}`}>Edit</Link>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teachers: state.teachersReducers.teachers,
    classes: state.teachersReducers.classes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addClasses: payload => dispatch(addClasses(payload)),
    addTeachers: payload => dispatch(addTeachers(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
