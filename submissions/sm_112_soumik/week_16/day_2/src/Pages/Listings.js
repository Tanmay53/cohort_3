import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Listings(props) {
  const [pageNo, setPageNo] = useState(1);
  const [userPerPage, setUserPerPage] = useState(25);
  const [data, setData] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);
  const [loading, setLoading] = useState(true);

  // fetching data
  const fetchUser = async (page = pageNo, user = userPerPage) => {
    if (props.location.search != "") {
      let query = new URLSearchParams(props.location.search);
      let page = query.get("page_no");
      let perPage = query.get("user_per_page");
      let config = {
        method: "GET",
        baseURL: "http://localhost:5000",
        params: {
          page_no: page,
          user_per_page: perPage
        }
      };
      // setLoading(true);
      await axios.get("/user", config).then(res => {
        setData(res.data.data);
        setNoOfPages(res.data.page);
      });
      setLoading(false);
    } else {
      let config = {
        method: "GET",
        baseURL: "http://localhost:5000",
        params: {
          page_no: page,
          user_per_page: user
        }
      };
      await axios.get("/user", config).then(res => {
        setData(res.data.data);
        setNoOfPages(res.data.page);
      });
    }
  };

  useEffect(() => {
    if (loading) {
      fetchUser();
    }
  });
  // SELECT CHANGE DATA

  // CREATE PAGINATION BUTTONS
  let pages = [];
  for (let i = 1; i <= noOfPages; i++) {
    pages.push(
      <Link
        key={i}
        className="badge m-2 badge-danger"
        to={`${props.match.url}?page_no=${i}&user_per_page=${userPerPage}`}
        onClick={() => {
          setLoading(true);
        }}
      >
        Page {i}
      </Link>
    );
  }
  const handleChangePage = async e => {
    let val = parseInt(e.target.value);
    setUserPerPage(val);
    props.history.push(
      `${props.match.url}?page_no=${pageNo}&user_per_page=${val}`
    );
    setLoading(true);
  };

  return (
    <div>
      <h2 className="bg-danger  display-3">Listings Page</h2>
      <div className="container col-12 col-md-10 border border-dark rounded">
        <div className="col-md-3 ml-auto m-4">
          <label>Select No of Data:</label>
          <select className="form-control" onChange={handleChangePage}>
            <option value=""></option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        {
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">Age</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map(ele => {
                return (
                  <tr key={ele.id}>
                    <th scope="row">{ele.id}</th>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.mobile}</td>
                    <td>{ele.age}</td>
                    <td>
                      <Link to={`/users/edit/${ele.id}`}>
                        <button className="btn btn-danger">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/users/delete/${ele.id}`}>
                        <button className="btn btn-success">Delete</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }

        {pages}
      </div>
    </div>
  );
}

export default Listings;
