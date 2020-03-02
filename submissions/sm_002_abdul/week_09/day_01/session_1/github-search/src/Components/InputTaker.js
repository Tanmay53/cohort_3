import React from "react";

class InputTaker extends React.Component {
  

  render(props) {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
          <div className="input-group my-3">
            <label>Search By :</label>
            <select
              className="form-control mx-2"
              name="searchBy"
              onChange={this.props.handleChange}
              value={this.props.items.searchBy}
            >
              <option value="">Search By</option>
              <option value="users">User</option>
              <option value="repositories">Repository</option>
            </select>
          </div>

          <div className="input-group my-3">
            <label>Search :</label>
            <input
              className="form-control mx-2"
              value={this.props.items.name}
              type="text"
              name="name"
              onChange={this.props.handleChange}
              placeholder="Search by name or repo"
            />
          </div>

          {
            this.props.items.searchBy==='repositories'
            &&
            <div className="input-group my-3">
            <label>Language :</label>
            <input
              className="form-control mx-2"
              value={this.props.items.language}
              type="text"
              name="language"
              onChange={this.props.handleChange}
              placeholder="Language"
            />
          </div>}

          <button className="btn btn-primary">Search</button>

        </div>
      </form>
    );
  }
}

export default InputTaker;
