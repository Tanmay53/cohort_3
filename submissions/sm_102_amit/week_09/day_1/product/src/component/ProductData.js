import React from "react";
class ProductData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: []
    };
  }

  createDropdown = () => {
    let dropdownItem = [];
    this.props.data.forEach(obj => {
      if (dropdownItem.includes(obj.category) === false) {
        dropdownItem.push(obj.category);
      }
    });
    this.setState({
      dropdown: dropdownItem
    });
  };

  filter = e => {
    let val = e.target.value;
    this.props.category(val);
  };

  render() {
    return (
      <div>
        <div className="col-md-4 form-group pl-0">
          <select
            className="form-control text-capitalize"
            onClick={this.createDropdown}
            onChange={e => this.filter(e)}
          >
            <option value="" disabled defaultValue>
              Select one category...
            </option>
            {this.state.dropdown.map(ele => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Seller Name</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">COD</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map(obj => (
                <tr key={obj.productId}>
                  <td>{obj.productId}</td>
                  <td>{obj.productName}</td>
                  <td>{obj.sellerName}</td>
                  <td>{obj.category}</td>
                  <td>{obj.quantity}</td>
                  <td>
                    {obj.cod ? (
                      <span className="badge badge-pill badge-success">
                        YES
                      </span>
                    ) : (
                      <span className="badge badge-pill badge-danger">NO</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ProductData;
