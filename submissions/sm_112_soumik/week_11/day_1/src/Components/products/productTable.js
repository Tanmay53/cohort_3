import React from "react";

class ShowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [this.props.data]
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <select className="custom-select">
              <option disabled>Filter</option>
              <option value="catagory">Catagory</option>
              <option value="mateial">Materials</option>
            </select>
          </div>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product Price</th>
              <th>Catagory</th>
              <th>Material</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(ele => {
              return (
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.desc}</td>
                  <td>{ele.price}</td>
                  <td>{ele.catagory}</td>
                  <td>{ele.material}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowData;
