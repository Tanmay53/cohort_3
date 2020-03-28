import React from "react";
import Dash from "./Dash";
import uuid from "react-uuid";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      class: "",
      section: "",
      subject: "",
      dataFaculty: [],
      dataEdt: [],
      misc: false,
      misc2: false,
      key: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let blockEntry = {
      name: this.state.name,
      class: this.state.class,
      section: this.state.section,
      subject: this.state.subject,
      key: uuid()
    };
    this.setState({
      dataFaculty: [...this.state.dataFaculty, blockEntry],
      dataEdt: [...this.state.dataEdt, blockEntry],
      misc: true
    });
    let localData = [...this.state.dataFaculty, blockEntry];
    localStorage.setItem("data", JSON.stringify(localData));

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      class: "",
      section: "",
      subject: ""
    });
  };
  componentDidMount() {
    if (localStorage.getItem("data")) {
      this.setState({
        dataFaculty: JSON.parse(localStorage.getItem("data")),
        dataEdt: JSON.parse(localStorage.getItem("data")),
        misc: true
      });
    }
  }

  changeFac = key => {
    let user = this.state.dataEdt.find(element => element.id === id);
    this.setState({
      name: user.name,
      class: user.class,
      section: user.section,
      subject: user.subject,
      key: user.key,
      misc2: true
    });
  };

  handleUpdate = e => {
    e.preventDefault();
    let blockEntry = {
      name: this.state.name,
      class: this.state.class,
      section: this.state.section,
      subject: this.state.subject,
      key: this.state.key
    };
    const { dataEdt, key } = this.state;
    const newUserData = dataEdt.map(element => {
      if (element.key === key) {
        return blockEntry;
      }
      return element;
    });
    this.setState({
      dataFaculty: newUserData,
      dataEdt: newUserData,
      misc2: false
    });
    localStorage.setItem("data", JSON.stringify(newUserData));
    this.reset();
  };

  removeFac = id => {
    let userData = this.state.dataFaculty.filter(
      element => element.key !== key
    );
    this.setState({
      dataEdt: [...userData]
    });
    localStorage.setItem("data", JSON.stringify(userData));
  };

  sectionsSort = e => {
    e.target.value === "colc"
      ? this.setState({ dataEdt: this.state.dataFaculty })
      : this.setState({
          dataEdt: this.state.dataFaculty.filter(
            element => element.section === e.target.value
          )
        });
  };

  subjectSort = e => {
    e.target.value === "colc"
      ? this.setState({ dataEdt: this.state.dataFaculty })
      : this.setState({
          dataEdt: this.state.dataFaculty.filter(
            element => element.subject === e.target.value
          )
        });
  };

  render() {
    let enterFunction = this.state.misc2
      ? this.handleUpdate
      : this.handleSubmit;

    return (
      <div className="container-fluid">
        <h1 className="text-center text-success display-3 mb-5 font-weight-bold">
          {" "}
          Welcome to Teacher's Management System
        </h1>
        <div className="col text-center justify-content-center">
          <form onSubmit={enterFunction}>
            <div className="form-group">
              <label className="h5">Assign Teacher</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Teacher's Name"
              />
            </div>
            <div className="form-group">
              <label className="h5">Class</label>
              <select
                name="class"
                value={this.state.class}
                onChange={this.handleChange}
                className="form-control"
              >
                <option value="--">Choose Class</option>
                <option value="XII">XII</option>
                <option value="XI">XI</option>
                <option value="X">X</option>
                <option value="IX">IX</option>
                <option value="VIII">VIII</option>
              </select>
            </div>
            <div className="form-group">
              <label className="h5"> Section</label>
              <select
                name="section"
                value={this.state.section}
                onChange={this.handleChange}
                className="form-control"
              >
                <option value="--">Choose Section</option>
                <option value="Alpha">Alpha</option>
                <option value="Beta">Beta</option>
                <option value="Gamma">Gamma</option>
              </select>
            </div>
            <div className="form-group">
              <label className="h5">Subject</label>
              <select
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange}
                className="form-control"
              >
                <option value="">Subject</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Maths">Maths</option>
                <option value="English">English</option>
                <option value="Biology">Biology</option>
                <option value="P.Ed">P.Ed</option>
              </select>
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-3 mb-5">Enter</button>
            </div>
          </form>
        </div>
        {this.state.misc && (
          <Dash
            data={this.state.dataEdt}
            handleEdit={this.changeFac}
            handleDelete={this.removeFac}
            filterSection={this.sectionsSort}
            filterSubject={this.subjectSort}
          />
        )}
      </div>
    );
  }
}
export default Block;
