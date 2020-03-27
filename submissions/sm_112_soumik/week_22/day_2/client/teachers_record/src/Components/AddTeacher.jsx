import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function AddTeacher(props) {
  const [section, setSection] = useState([]);
  const [classes, setClass] = useState([]);
  const [user, setUser] = useState({
    name: "",
    subject: "",
    section: 1,
    class: 1
  });
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoad(true);
      await axios.get("http://127.0.0.1:5000/get_class_section").then(res => {
        setClass(res.data.class);
        setSection(res.data.section);
      });
      setLoad(false);
    };
    getData();
  }, []);

  const clickhandler = () => {
    axios
      .post("http://127.0.0.1:5000/new_teacher", {
        name: user.name,
        subject: user.subject,
        class_id: user.class,
        section_id: parseInt(user.section)
      })
      .then(res => alert("teacher added succesfully"));
  };
  if (props.status == false) {
    return <Redirect to="/login" />;
  }
  if (load == true) {
    return <h2>loading...</h2>;
  }
  return (
    <div className="text-center container p-4">
      <h2>Add new Teacher</h2>
      <div className="col-md-5 offset-4">
        <input
          className="form-control"
          placeholder="Enter teacher Name"
          onChange={e => setUser({ ...user, name: e.target.value })}
          value={user.name}
        />
        <input
          className="form-control"
          placeholder="Enter Subject Name"
          value={user.subject}
          onChange={e => setUser({ ...user, subject: e.target.value })}
        />
        <select
          className="form-control"
          onChange={e => setUser({ ...user, section: e.target.value })}
        >
          <option defaultChecked>select class</option>
          {section.map(ele => (
            <option key={ele.id} value={ele.id}>
              {ele.section}
            </option>
          ))}
        </select>
        <select className="form-control">
          onChange={e => setUser({ ...user, class: e.target.value })}
          <option defaultChecked>Select Class</option>
          {classes.map(ele => (
            <option key={ele.id} value={ele.id}>
              {ele.class}
            </option>
          ))}
        </select>
        <button className="btn btn-outline-info mt-4" onClick={clickhandler}>
          Add Teacher
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  status: state.auth.status
});

export default connect(mapStateToProps, null)(AddTeacher);
