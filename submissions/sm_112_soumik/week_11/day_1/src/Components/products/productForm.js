import React from "react";
import ShowData from "./productTable";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      desc: "",
      price: "",
      material: "",
      catagory: "",
      item: [],
      copyItem: []
    };
  }

  submitForm = e => {
    e.preventDefault();
    let newItem = {
      name: this.state.name,
      id: this.state.id,
      desc: this.state.desc,
      price: this.state.price,
      material: this.state.target,
      catagory: this.state.catagory
    };
    let list = [...this.state.item, { ...newItem }];

    this.setState({ item: list });
    this.setState({ copyItem: list });
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="text-center display-3">Products Page</h2>
        <div className="row">
          <div className="col-4 p-4 m-4">
            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label>
                  Item Name :
                  <input
                    onChange={this.inputHandler}
                    className="form-control"
                    name="name"
                    value={this.state.name}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Item Id :
                  <input
                    onChange={this.inputHandler}
                    className="form-control"
                    name="id"
                    value={this.state.id}
                  />
                </label>
              </div>
              <div>
                <label>
                  Item Description :
                  <input
                    onChange={this.inputHandler}
                    className="form-control"
                    name="desc"
                    value={this.state.desc}
                  />
                </label>
              </div>
              {/* select Catagory */}
              <select
                className="custom-select"
                onChange={this.changeHandler}
                name="catagory"
              >
                <option disabled>Catagory</option>
                <option value="bedroom">Bedroom</option>
                <option value="living room">Living Room</option>
                <option value="dining">Dining</option>
                <option value="appliances">Appliances</option>
              </select>
              {/* select material */}
              <select
                className="custom-select"
                onChange={this.changeHandler}
                name="material"
              >
                ><option disabled>Material</option>
                <option value="teak">Teak</option>
                <option value="oak">Oak</option>
                <option value="walnut">Walnut</option>
                <option value="maple">Maple</option>
              </select>
              <label>
                Price:
                <input
                  onChange={this.inputHandler}
                  className="form-control"
                  name="price"
                  value={this.state.price}
                />
              </label>
              <div>
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-6">
            {this.state.item.length ? (
              <ShowData data={this.state.item} />
            ) : (
              <h2>add new product</h2>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
