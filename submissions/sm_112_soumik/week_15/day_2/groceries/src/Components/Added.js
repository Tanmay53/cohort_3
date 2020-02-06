import React, { useEffect, useState } from "react";
import axios from "axios";

function Added() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/purchased/1")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log(data);
  return (
    <div>
      <h2>Items Added To List</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map(ele => {
            return (
              <tr key={ele.quantity}>
                <td>{ele.items}</td>
                <td>{ele.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Added;
