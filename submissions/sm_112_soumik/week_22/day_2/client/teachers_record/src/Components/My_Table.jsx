import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function My_Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [changes, setChanges] = useState(1);
  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const fetchTable = async () => {
      setLoading(true);
      await axios
        .get("http://localhost:5000/all_teachers")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
      setLoading(false);
    };
    fetchTable();
  }, [changes]);

  if (loading == true) {
    return <h2>...loading</h2>;
  }
  const deletehandler = async id => {
    await axios
      .post("http://localhost:5000/delete_user", {
        t_id: id
      })
      .then(res => console.log(res));
    setChanges(changes + 1);
  };
  const orderHandler = e => {
    axios
      .post("http://localhost:5000/set_order", {
        order: e.target.value
      })
      .then(res => console.log(res.data));
  };
  const filterHandler = e => {
    axios
      .post("http://localhost:5000/set_filter", { filter: e.target.value })
      .then(res => console.log(res.data));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <select className="form-control" onChange={e => orderHandler(e)}>
            <option defaultChecked>Order By</option>
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-control" onChange={e => filterHandler(e)}>
            <option defaultChecked>Filter</option>
            <option>class</option>
            <option>section</option>
            <option>subject</option>
          </select>
        </div>
      </div>
      <table className="table p-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Teachers</th>
            <th scope="col">Class</th>
            <th scope="col">Section</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map(ele => (
            <tr key={ele.id}>
              <td>{ele.name}</td>
              <td>{ele.class}</td>
              <td>{ele.section}</td>
              <td>
                <Link to={`/edit/${ele.id}`} className="text-dark">
                  edit
                </Link>
              </td>
              <td onClick={() => deletehandler(ele.id)}>delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default My_Table;
