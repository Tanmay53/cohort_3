import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const fetchData = async () => {
      let response = await axios.get("http://localhost:5000/listing");
      this.setState({
        data: response.data.groseries
      });
    };
    fetchData();
  }
  render() {
    return (
      <div>
        <button className="btn btn-outline-primary">
          <Link to="/add">Add new Item</Link>
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Purchased</th>
              <th>Change</th>
              <th>Delete</th>
              <th>Mark</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((ele, index) => (
              <tr>
                <td>{ele.item}</td>
                <td>{ele.quantity}</td>
                <td>{ele.purchased}</td>
                <td>
                  <Link
                    to={`/change/${index + 1}?item=${ele.item}&quantity=${
                      ele.quantity
                    }`}
                  >
                    Change
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/delete/${index + 1}?item_no=${index + 1}&item=${
                      ele.item
                    }&quantity=${ele.quantity}`}
                  >
                    Delete
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/mark/${index + 1}?item_no=${index + 1}&item=${
                      ele.item
                    }&quantity=${ele.quantity}`}
                  >
                    <button className="btn btn-primary">Purchase</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/done">
          <button className="btn btn-primary">See Purchased Items</button>
        </Link>
      </div>
    );
  }
}
