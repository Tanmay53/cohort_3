import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Listings(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const [pagination, setPagination] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchuser();
  }, []);

  const fetchuser = async (val = page, data = perPage) => {
    if (props.location.search != "") {
      let query = new URLSearchParams(props.location.search);
      let pageNo = query.get("page");
      let dataPerPage = query.get("perPage");
      setPage(pageNo);
      setPerPage(perPage);
    }

    let config = {
      method: "GET",
      baseURL: "http://localhost:5000",
      params: {
        page: val,
        perPage
      }
    };

    return await axios.get("/user", config).then(res => {
      setData(res.data.data);
      setTotalPages(res.data.page);
    });
  };

  const noOfPageHandler = e => {
    fetchuser(e.target.value);
    setPage();
  };

  const setPageHandlers = e => {
    setPagination(true);
    setPerPage(e.target.value);
    fetchuser(page, e.target.value);
  };

  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <Link
        to={`${props.match.url}?page=${page}&perPage=${perPage}`}
        className="btn btn-danger mx-3"
      >
        <button onClick={noOfPageHandler} value={i} className="btn btn-info">
          page {i}
        </button>
      </Link>
    );
  }

  return (
    <div>
      <h2 className="bg-danger  display-3">Listings Page</h2>
      <div className="container col-12 col-md-10 border border-dark rounded">
        <div className="col-md-3 ml-auto m-4">
          <label>Select No of Data:</label>
          <select className="form-control" onChange={setPageHandlers}>
            <option></option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
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
        {pagination ? <div>{pages}</div> : <span>___</span>}
      </div>
    </div>
  );
}

export default Listings;
